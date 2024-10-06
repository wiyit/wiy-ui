export default {
    template: import('./select.html'),
    style: import('./select.css'),
    data: {
        options: [],
        data: {},
    },
    methods: {
        onInputChange() {
            const select = this.getElement('select');
            if (select) {
                this.options.forEach((option, index) => {
                    const o = select[index + 1];
                    const selected = o.selected;
                    this.data[option.value] = selected;
                });
            }
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