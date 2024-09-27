export default {
    template: import('./form.html'),
    style: import('./form.css'),
    data: {
        itemList: [],
        operationList: [],
    },
    methods: {
        getLabelStyle(index) {
            return `grid-row: ${parseInt(index) + 1}`;
        },
        onOperationClick(operation) {
            operation.onclick && operation.onclick(this);
        },
    },
};