export default {
    template: import('./input.html'),
    style: import('./input.scss'),
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