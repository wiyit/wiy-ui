import template from './input.html';
import style from './input.scss';

export default {
    template,
    style,
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
                    text: this.getValue(),
                }, e);
            }
        },
        onInputCompositionend(e) {
            this.trigger('textchange', {
                text: this.getValue(),
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