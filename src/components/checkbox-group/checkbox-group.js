export default {
    template: import('./checkbox-group.html'),
    style: import('./checkbox-group.css'),
    data: {
        options: [],
        data: {},
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
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