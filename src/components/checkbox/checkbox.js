import template from './checkbox.html';
import style from './checkbox.css';

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