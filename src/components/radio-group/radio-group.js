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
        isOther() {
            return this.data && !this.actualOptions.some(o => this.data === o.value);
        },
        onInputChange(e, value) {
            this.trigger('change', {
                data: this.data = value,
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                data: this.data,
            });
        },
    },
};