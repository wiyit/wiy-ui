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
        onOperationClick(operation) {
            operation.onclick && operation.onclick(this);
        },
        onItemValueChange(item) {
            item.onchange && item.onchange(this, item);
        },
    },
};