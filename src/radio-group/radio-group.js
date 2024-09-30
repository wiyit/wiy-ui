export default {
    template: import('./radio-group.html'),
    style: import('./radio-group.css'),
    data: {
        options: [],
    },
    methods: {
        onInputChange(key) {
            this.options.forEach((option, index) => {
                option.checked = index == key;
            });
        },
    },
};          