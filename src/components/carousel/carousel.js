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
            this.setActive((this.active - 1 + count) % count);
        },
        goNext() {
            const count = this.items.length;
            this.setActive((this.active + 1 + count) % count);
        },
        setActive(index) {
            const items = this.getElement('items');
            const item = this.getElement(`item-${index}`);
            if (item) {
                items.scrollTo({
                    left: item.offsetLeft,
                    behavior: 'smooth',
                });
                this.active = index;
            }
        },
        play(index) {
            this.pause();
            if (typeof index != 'undefined') {
                this.setActive(index);
            }
            this.autoplayIntervalId = setInterval(() => {
                this.goNext();
            }, this.attr('autoplay-interval') || 4000);
        },
        pause(index) {
            if (typeof index != 'undefined') {
                this.setActive(index);
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
                if (item.offsetLeft == items.scrollLeft) {
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