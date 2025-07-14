import template from './rate.html';
import style from './rate.scss';

export default {
    template,
    style,
    data: {
        score: undefined,
        showScore: undefined,
    },
    methods: {
        onItemClick(key) {
            this.score = key + 1;
            this.trigger('change', {
                score: this.score,
            });
        },
    },
    lifecycle: {
        init() {
            this.trigger('datainit', {
                score: this.score,
            });
        },
    },
};