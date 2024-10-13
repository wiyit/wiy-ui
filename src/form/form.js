export default {
    template: import('./form.html'),
    style: import('./form.css'),
    data: {
        title: '',
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
        needShow(item) {
            return !item.when || item.when(this, item);
        },
    },
};