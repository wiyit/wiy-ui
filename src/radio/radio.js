export default {
    template: import('./radio.html'),
    style: import('./radio.css'),
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
};          