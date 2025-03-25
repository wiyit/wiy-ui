export default {
    template: import('./carousel.html'),
    style: import('./carousel.scss'),
    data: {
        items: [],
    },
    methods: {
        goLeft() {
            const items = this.getElement('items');
            items.scrollBy({
                left: -1,
                behavior: 'smooth',
            });
        },
        goRight() {
            const items = this.getElement('items');
            items.scrollBy({
                left: 1,
                behavior: 'smooth',
            });
        },
    },
    lifecycle: {
        mount() {
            this.autoplayIntervalId = setInterval(() => {
                this.goRight();
            }, 4000);
        },
        unmount() {
            clearInterval(this.autoplayIntervalId);
        },
    },
};