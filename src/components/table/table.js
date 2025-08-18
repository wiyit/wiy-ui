import template from './table.html';
import style from './table.scss';

export default {
    template,
    style,
    data() {
        return {
            columns: [],
            data: [],
            operations: undefined,
            startRowNumber: 1,
            onrowclick: undefined,
            columnId: (column, columnIndex) => {
                return columnIndex + (this.virtual.column?.actualRenderStart || 0);
            },
            dataId: (row, rowIndex) => {
                return rowIndex + (this.virtual.row?.actualRenderStart || 0);
            },
            virtual: {
                enabled: false,
                rowHeight: undefined,
                columnWidth: undefined,
                rowBufferCount: undefined,
                columnBufferCount: undefined,
            },
        };
    },
    methods: {
        getOperations(row) {
            let operations = this.operations;
            if (typeof operations === 'function') {
                operations = operations(this, row);
            }
            return operations;
        },
        async getData() {
            this.actualData = await this.actual(this.data);
            return this.actualData;//返回响应式结果
        },
        getItem(row, rowIndex, column, columnIndex) {
            let value;

            if (typeof column.value === 'function') {
                value = column.value(this, row, rowIndex, column, columnIndex);
            } else {
                value = row[column.value || columnIndex];
            }
            if (typeof value === 'undefined') {
                value = column.defaultValue || '';
            }

            return value;
        },
        onRowClick(e, row, rowIndex) {
            const operationsElement = this.getElement(`operations-${rowIndex}`);
            if (operationsElement && this.onEventPath(e, operationsElement)) {//操作列有内容时忽略点击事件
                return;
            }
            this.onrowclick && this.onrowclick(this, row, rowIndex);
        },
    },
    lifecycle: {
        mount() {
            const element = this.getElement();
            const container = this.getElement('container');
            const table = this.getElement('table');
            const virtual = this.virtual;
            if (!virtual.enabled) {
                return;
            }

            const update = (dimension) => {
                const {
                    defaultSize = 0,
                    bufferCount = 0,
                    source = [],
                    scroll = 0,
                    viewSize = 0,
                    items = this.raw([]),
                } = dimension;
                let prevOffset = 0, prevSize = 0;
                let visibleStart = -1, visibleEnd = -1;
                for (let i = 0, max = source.length; i < max; i++) {
                    const item = items[i] = items[i] || {
                        index: i,
                    };
                    const offset = item.offset = prevOffset + prevSize;
                    const size = Math.max(item.size || defaultSize, 0);
                    const visible = item.visible = offset + size >= scroll && offset < scroll + viewSize;
                    prevOffset = offset;
                    prevSize = size;
                    if (visible) {
                        visibleStart < 0 && (visibleStart = i);
                        visibleEnd = i;
                    }
                }
                const actualBufferCount = bufferCount;
                const renderStart = visibleStart - actualBufferCount;
                const renderEnd = visibleEnd + actualBufferCount;
                const actualRenderStart = Math.max(0, renderStart);
                const actualRenderEnd = Math.min(items.length, Math.max(0, renderEnd));
                const renderItems = source.slice(actualRenderStart, actualRenderEnd);
                return {
                    ...dimension,
                    items,
                    offset: items[actualRenderStart]?.offset || 0,
                    size: prevOffset + prevSize,
                    actualBufferCount,
                    visibleStart,
                    visibleEnd,
                    renderStart,
                    renderEnd,
                    actualRenderStart,
                    actualRenderEnd,
                    renderItems,
                };
            };
            const updateRows = () => {
                let dimension = virtual.row || {};
                dimension.defaultSize = virtual.rowHeight;
                dimension.bufferCount = virtual.rowBufferCount;
                dimension.source = this.actualData;
                virtual.row = dimension = update(dimension);
                container.style.minHeight = `${dimension.size}px`;
                table.style.top = `${dimension.offset}px`;
            };
            const updateColumns = () => {
                let dimension = virtual.column || {};
                dimension.defaultSize = virtual.columnWidth;
                dimension.bufferCount = virtual.columnBufferCount;
                dimension.source = this.columns;
                virtual.column = dimension = update(dimension);
                container.style.minWidth = `${dimension.size}px`;
                table.style.left = `${dimension.offset}px`;
            };

            updateRows();
            updateColumns();

            this.observe(() => {
                return virtual.row.viewSize;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }
                updateRows();
            });
            this.observe(() => {
                return virtual.row.scroll;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }
                updateRows();
            }, null, null, 100);
            this.observe(() => {
                return virtual.column.viewSize;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }
                updateColumns();
            });
            this.observe(() => {
                return virtual.column.scroll;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }
                updateColumns();
            }, null, null, 100);

            new ResizeObserver((entries) => {
                const {
                    inlineSize: viewWidth,
                    blockSize: viewHeight,
                } = entries[0].contentBoxSize[0];
                virtual.column.viewSize = viewWidth;
                virtual.row.viewSize = viewHeight;
            }).observe(element);

            element.addEventListener('scroll', e => {
                const {
                    scrollLeft,
                    scrollTop,
                } = element;
                virtual.column.scroll = scrollLeft;
                virtual.row.scroll = scrollTop;
            });

            const resizeObserver = new ResizeObserver((entries) => {
                let rowChanged, columnChanged;
                for (const entry of entries) {
                    const [type, index] = entry.target.id.split('-');
                    switch (type) {
                        case 'r': {
                            const oldSize = virtual.row.items[index].size;
                            const newSize = entry.borderBoxSize[0].blockSize;
                            if (oldSize !== newSize) {
                                virtual.row.items[index].size = newSize;
                                columnChanged = true;
                            }
                            break;
                        }
                        case 'c': {
                            const oldSize = virtual.column.items[index].size;
                            const newSize = entry.borderBoxSize[0].inlineSize;
                            if (oldSize !== newSize) {
                                virtual.column.items[index].size = newSize;
                                rowChanged = true;
                            }
                            break;
                        }
                    }
                }
                if (rowChanged) {
                    updateRows();
                }
                if (columnChanged) {
                    updateColumns();
                }
            });
            const mutationObserver = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const addedNode of mutation.addedNodes) {
                        if (addedNode.nodeType === Node.ELEMENT_NODE) {
                            resizeObserver.observe(addedNode);
                        }
                    }
                    for (const removedNode of mutation.removedNodes) {
                        if (removedNode.nodeType === Node.ELEMENT_NODE) {
                            resizeObserver.unobserve(removedNode);
                        }
                    }
                }
            });
            mutationObserver.observe(table.tHead.rows[0], {
                childList: true,
            });
            mutationObserver.observe(table.tBodies[0], {
                childList: true,
            });
        }
    }
};