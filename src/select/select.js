export default {
    template: import('./select.html'),
    data: {
        options: [],
    },
    methods: {
        onInputChange(e, node) {
            if (node) {
                this.options.forEach((option, index) => {
                    const o = node[index + 1];
                    option.selected = o.selected;
                    option.disabled = o.disabled;
                });
            }
            this.trigger('change', {
                value: this.value,
                options: this.options,
            });
        }
    },
    lifecycle: {
        async init() {
            this.onInputChange();
        }
    }
};