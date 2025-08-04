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
        onRowClick(row, rowIndex) {
            this.onrowclick && this.onrowclick(this, row, rowIndex);
        },
    },
};