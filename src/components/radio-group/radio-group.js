export default {
    template: import('./radio-group.html'),
    style: import('./radio-group.scss'),
    data: {
        options: [],
        data: undefined,
    },
    methods: {
        async getOptions() {
            this.actualOptions = await this.actual(this.options);
            return this.actualOptions;//返回响应式结果
        },
        getOtherData() {
            if (!this.actualOptions.some(o => this.data === o.value)) {
                return this.data;
            }
        },
        onInputChange(e, value) {
            this.trigger('change', {
                data: this.data = value,
            });
        },
        onOtherChange(e, otherData) {
            this.trigger('change', {
                data: this.data = otherData,
            });
        }
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                data: this.data,
            });
        },
    },
};