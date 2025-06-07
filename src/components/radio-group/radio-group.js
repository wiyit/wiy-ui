export default {
    template: import('./radio-group.html'),
    style: import('./radio-group.scss'),
    data: {
        options: [],
        data: undefined,
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