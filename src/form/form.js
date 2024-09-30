export default {
    template: import('./form.html'),
    style: import('./form.css'),
    data: {
        title: '请填写表单：',
        items: [],
        operations: [],
    },
    methods: {
        getLabelStyle(index) {
            return `grid-row: ${index + 1}`;
        },
        getAllData() {
            return this.items.map(item => {
                let value = item.value;
                if (item.type == 'radio-group') {
                    value = (item.options.filter(option => {
                        return option.checked;
                    })[0] || {}).value;
                }
                return {
                    name: item.name,
                    value,
                };
            });
        },
        onOperationClick(operation) {
            operation.onclick && operation.onclick(this);
        },
    },
};