import template from './carousel.html';
import style from './carousel.scss';

export default {
    template,
    style,
    data: {
        items: [],
        active: 0,
    },
    methods: {
        goPrev() {
            const count = this.items.length;
            this.active = (this.active - 1 + count) % count;
        },
        goNext() {
            const count = this.items.length;
            this.active = (this.active + 1 + count) % count;
        },
        play(index) {
            this.pause();
            if (typeof index != 'undefined') {
                this.active = index;
            }
            this.autoplayIntervalId = setInterval(() => {
                this.goNext();
            }, this.attr('autoplay-interval') || 4000);
        },
        pause(index) {
            if (typeof index != 'undefined') {
                this.active = index;
            }
            clearInterval(this.autoplayIntervalId);
        },
        autoplay(delay) {
            setTimeout(() => {
                this.play();
            }, delay || this.attr('autoplay-delay') || 0);
        },
        onScrollEnd() {
            const items = this.getElement('items');
            for (let index in this.items) {
                const item = this.getElement(`item-${index}`);
                if (item.offsetLeft === items.scrollLeft) {
                    this.active = parseInt(index);
                    return;
                }
            }
        },
        onMouseEnter() {
            this.pause();
        },
        onMouseLeave() {
            if (this.autoplayIntervalId) {
                this.autoplay();
            }
        },
    },
    lifecycle: {
        init() {
            this.observe(() => {
                return this.active;
            }, ({ result, firstObserve }) => {
                this.active = Math.max(Math.min(result, this.items.length - 1), 0);

                const items = this.getElement('items');
                const item = this.getElement(`item-${this.active}`);
                if (item) {
                    items.scrollTo({
                        left: item.offsetLeft,
                    });
                }

                this.trigger(firstObserve ? 'datainit' : 'change', {
                    active: this.active,
                });
            });
        },
        mount() {
            if (this.hasAttr('autoplay')) {
                this.autoplay();
            }
        },
        beforeUnmount() {
            this.pause();
        },
    },
};