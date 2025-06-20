export default {
    template: import('./input.html'),
    style: import('./input.scss'),
    data: {
        text: '',
        showPassword: false,
    },
    methods: {
        getValue() {
            return this.getElement('input').value;
        },
        onInputChange(e) {
            this.trigger('change', {
                text: this.text = this.getValue(),
            }, e);
        },
        onInputInput(e) {
            if (!e.isComposing) {
                this.trigger('textchange', {
                    text: this.text = this.getValue(),
                }, e);
            }
        },
        onInputCompositionend(e) {
            this.trigger('textchange', {
                text: this.text = this.getValue(),
            }, e);
        },
        onPasswordToggleClick() {
            const input = this.getElement('input');
            input.type = input.type === 'password' ? 'text' : 'password';
            this.showPassword = !this.showPassword;
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                text: this.text,
            });
        },
    },
};