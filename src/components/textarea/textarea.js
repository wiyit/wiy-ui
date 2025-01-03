export default {
    template: import('./textarea.html'),
    style: import('./textarea.scss'),
    data: {
        text: '',
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
                text: this.text,
            });
        }
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                text: this.text,
            });
        },
    },
};