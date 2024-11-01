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
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                options: this.options,
                data: this.data,
            });
        },
    },
};