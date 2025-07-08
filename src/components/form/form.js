export default {
    template: import('./form.html'),
    style: import('./form.scss'),
    components: {
        'sub-form': import('./form.js'),
    },
    data: {
        title: '',
        desc: '',
        items: [],
        operations: [],
        data: {},
    },
    methods: {
        async getItems() {
            this.actualItems = await this.actual(this.items);
            return this.actualItems;//返回响应式结果
        },
        async getOperations() {
            this.actualOperations = await this.actual(this.operations);
            return this.actualOperations;//返回响应式结果
        },
        async getData() {
            this.actualData = await this.actual(this.data);
            return this.actualData;//返回响应式结果
        },
        onOperationClick(operation) {
            operation.onclick && operation.onclick(this, operation);
        },
        needShowOperation(operation) {
            return !operation.when || operation.when(this, operation);
        },
        onItemValueChange(item) {
            item.onchange && item.onchange(this, item);
        },
        onItemDestroy(item) {
            delete this.actualData[item.name];
            item.ondestroy && item.ondestroy(this, item);
        },
        needShowItem(item) {
            return !item.when || item.when(this, item);
        },
        onFilePickerFileClick(e, item) {
            item.onfileclick && item.onfileclick(this, item, e.data.file);
        },
        onButtonClick(e, item) {
            item.onclick && item.onclick(this, item);
        },
        validate() {
            const validateItem = (item) => {
                if (item.type === 'form') {
                    return validateItems(item.items);
                }

                const label = (item.label || item.name)?.trim();
                const data = this.actualData[item.name];
                if (item.required) {
                    if (_.isUndefined(data) || _.isNull(data) || data.length === 0) {
                        return {
                            item,
                            info: `${label}不能为空`,
                        };
                    }
                }
            };
            const validateItems = (items) => {
                for (let item of items) {
                    const error = validateItem(item);
                    if (error) {
                        return error;
                    }
                }
            };
            return validateItems(this.actualItems);
        },
    },
};