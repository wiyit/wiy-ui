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
                options: this.options,
                data: this.data,
            });
        },
    },
    lifecycle: {
        init() {
            this.onInputChange();
        }
    }
};          