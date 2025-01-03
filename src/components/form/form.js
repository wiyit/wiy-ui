export default {
    template: import('./form.html'),
    style: import('./form.scss'),
    data: {
        title: '',
        desc: '',
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
        onFilePickerFileClick(e, item) {
            item.onfileclick && item.onfileclick(this, item, e.data.file);
        },
    },
};