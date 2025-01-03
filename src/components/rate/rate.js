export default {
    template: import('./rate.html'),
    style: import('./rate.scss'),
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