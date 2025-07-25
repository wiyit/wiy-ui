import template from './textarea.html';
import style from './textarea.scss';

export default {
    template,
    style,
    data: {
        text: '',
    },
    methods: {
        getValue() {
            return this.getElement('textarea')?.value;
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
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                text: this.text,
            });
        },
    },
};