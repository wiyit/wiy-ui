import template from './radio.html';
import style from './radio.css';

export default {
    template,
    style,
    data: {
        checked: false,
    },
    methods: {
        onInputChange() {
            this.trigger('change', {
                checked: this.checked,
            });
        }
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                checked: this.checked,
            });
        },
    },
};