export default {
    template: import('./select.html'),
    style: import('./select.scss'),
    data: {
        options: [],
        data: {},
    },
    methods: {
        onInputChange() {
            const select = this.getElement('select');
            const noPrompt = this.hasAttr('no-prompt');
            if (select) {
                const data = {};
                this.options.forEach((option, index) => {
                    const o = select[index + (noPrompt ? 0 : 1)];
                    const selected = o.selected;
                    data[option.value] = selected;
                });
                this.data = data;
            }
            this.trigger('change', {
                data: this.data,
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