import template from './table.html';
import style from './table.scss';

export default {
    template,
    style,
    data: {
        columns: [],
        data: [],
        operations: undefined,
        startRowNumber: 1,
        onrowclick: undefined,
    },
    methods: {
        getOperations(row) {
            if (typeof this.operations == 'function') {
                return this.operations(row);
            }
            return this.operations;
        },
        getItem(row, column, rowIndex, columnIndex) {
            let value;

            if (typeof column.value == 'function') {
                value = column.value(row, rowIndex);
            } else {
                value = row[column.value || columnIndex];
            }
            if (typeof value == 'undefined') {
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
};