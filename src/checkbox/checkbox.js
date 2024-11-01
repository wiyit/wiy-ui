export default {
    template: import('./checkbox.html'),
    style: import('./checkbox.css'),
    data: {
        checked: false,
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
                checked: this.checked,
            });
        }
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                checked: this.checked,
            });
        },
    },
};