export default {
    template: import('./checkbox-group.html'),
    style: import('./checkbox-group.scss'),
    data: {
        options: [],
        data: [],
    },
    methods: {
        async getOptions() {
            this.actualOptions = await this.actual(this.options);
            return this.actualOptions;//返回响应式结果
        },
        getOtherData() {
            if (this.data) {
                return this.data.filter(d => {
                    return !this.actualOptions.some(o => d === o.value);
                });
            }
        },
        onInputChange(e, value) {
            const data = this.data;
            const { checked } = e.target;
            let changed = false;
            if (checked) {
                if (!data.includes(value)) {
                    data.push(value);
                    changed = true;
                }
            } else {
                let index;
                while ((index = data.indexOf(value)) >= 0) {
                    data.splice(index, 1);
                    changed = true;
                }
            }

            changed && this.trigger('change', {
            });
        },
        onOtherChange(e, otherData) {
            if (otherData) {
                this.data = this.data.filter(d => {
                    return this.actualOptions.some(o => d === o.value);
                }).concat(otherData);
                this.trigger('change', {
                    data: this.data,
                });
            }
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