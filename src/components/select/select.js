export default {
    template: import('./select.html'),
    style: import('./select.scss'),
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
        onSelectChange(e) {
            const { options } = e.target;
            this.trigger('change', {
                data: this.data = options[options.selectedIndex].v || null,
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