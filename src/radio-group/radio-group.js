export default {
    template: import('./radio-group.html'),
    style: import('./radio-group.css'),
    data: {
        options: [],
        data: {},
    },
    methods: {
        onInputChange(key) {
            this.options.forEach((option, index) => {
                const checked = index == key;
                this.data[option.value] = checked;
            });
            this.trigger('change', {
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