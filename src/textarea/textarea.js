export default {
    template: import('./textarea.html'),
    style: import('./textarea.css'),
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
            this.onInputChange();
        }
    }
};          