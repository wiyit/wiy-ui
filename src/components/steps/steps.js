import template from './steps.html';
import style from './steps.scss';

export default {
    template,
    style,
    data: {
        current: 0,
        items: [],
    },
    methods: {
        onItemClick(item, index) {
            this.trigger('change', {
                current: this.current = index,
            });
        }
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                current: this.current,
            });
        }
    }
};