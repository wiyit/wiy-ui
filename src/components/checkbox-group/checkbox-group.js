export default {
    template: import('./checkbox-group.html'),
    style: import('./checkbox-group.scss'),
    data: {
        options: [],
        data: [],
    },
    methods: {
        getOptions() {
            const options = this.options;
            if (typeof options == 'function') {
                return options();
            }
            return options;
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
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                options: this.options,
                data: this.data,
            });
        },
    },
};