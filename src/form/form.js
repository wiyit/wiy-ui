export default {
    template: import('./form.html'),
    style: import('./form.css'),
    data: {
        title: '请填写表单：',
        items: [],
        operations: [],
        data: {},
    },
    methods: {
        getLabelStyle(index) {
            return `grid-row: ${index + 1}`;
        },
        onOperationClick(operation) {
            operation.onclick && operation.onclick(this);
        },
    },
};