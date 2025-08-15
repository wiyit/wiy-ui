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
};