export default {
    template: import('./table.html'),
    style: import('./table.css'),
    data: {
        columns: [],
        data: [],
        operations: [],
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
        getNumberCellStyle(index) {
            return `grid-row: ${parseInt(index) + 2}`;
        },
        getOperationCellStyle(index) {
            return `grid-row: ${parseInt(index) + 2}`;
        },
        getFlattenedDataList() {
            const dataList = [];
            Object.entries(this.data).forEach(([rowIndex, row]) => {
                this.columns.forEach((column, columnIndex) => {
                    column = this.getColumn(column);
                    let value;
                    if (typeof column.value == 'function') {
                        value = column.value(row);
                    } else {
                        value = row[column.value || columnIndex];
                    }
                    dataList.push(value);
                });
            });
            return dataList;
        },
        getClasses(index) {
            const column = this.getColumn(this.columns[index % this.columns.length]);
            const classes = [];

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

            return classes.join(' ');
        },
        getTableStyle() {
            const widthList = ['40px'];
            this.columns.forEach(column => {
                const { width, minWidth, maxWidth } = this.getColumn(column);
                widthList.push(`minmax(${minWidth || width || 'auto'}, ${maxWidth || width || 'auto'})`);
            });
            widthList.push('max-content');
            return `grid-template-columns: ${widthList.join(' ')}`;
        },
    },
};