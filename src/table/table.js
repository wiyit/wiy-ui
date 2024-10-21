export default {
    template: import('./table.html'),
    style: import('./table.css'),
    data: {
        columns: [],
        data: [],
        operations: undefined,
    },
    methods: {
        getColumn(column) {
            if (column && typeof column == 'object') {
                return column;
            }
            return {
                name: column,
            };
        },
        getOperations(row) {
            if (typeof this.operations == 'function') {
                return this.operations(row);
            }
            return this.operations;
        },
        getItem(row, column, rowIndex, columnIndex) {
            column = this.getColumn(column);
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
        onCellClick(row, column, rowIndex, columnIndex) {
            column = this.getColumn(column);
            column.onclick && column.onclick(this, row, column, rowIndex, columnIndex);
        },
        getClasses(column) {
            column = this.getColumn(column);
            const classes = ['cell'];

            switch (column.hAlign) {
                case 'right': classes.push('h-align-right'); break;
                case 'center': classes.push('h-align-center'); break;
                default: classes.push('h-align-left'); break;
            }

            switch (column.vAlign) {
                case 'top': classes.push('v-align-top'); break;
                case 'bottom': classes.push('v-align-bottom'); break;
                default: classes.push('v-align-center'); break;
            }

            if (column.onclick) {
                classes.push('clickable');
            }

            return classes.join(' ');
        },
        getTableStyle() {
            const widthList = ['max-content'];
            this.columns.forEach(column => {
                const { width, minWidth, maxWidth } = this.getColumn(column);
                widthList.push(`minmax(${minWidth || width || 'auto'}, ${maxWidth || width || 'auto'})`);
            });
            widthList.push('max-content');
            return `grid-template-columns: ${widthList.join(' ')}`;
        },
    },
};