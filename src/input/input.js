export default {
    template: import('./input.html'),
    style: import('./input.css'),
    data: {
        value: undefined,
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
                value: this.value,
            });
        }
    },
};          