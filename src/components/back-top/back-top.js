export default {
    template: import('./back-top.html'),
    style: import('./back-top.scss'),
    data: {
        show: false,
        container: window,
    },
    methods: {
        backTop() {
            const container = this.getContainer();
            const duration = Math.max(this.attr('duration') || 200, 0);
            const end = 0;
            const start = container.scrollY || container.scrollTop || 0;
            const distance = end - start;
            const startTime = performance.now();
            const scroll = (timestamp) => {
                const interval = timestamp - startTime;
                const current = distance / duration * interval + start;
                if (Math.abs(current - start) >= Math.abs(distance)) {//已超出滚动距离
                    container.scrollTo({
                        top: end,
                    });
                } else {
                    container.scrollTo({
                        top: current,
                    });
                    requestAnimationFrame(scroll);
                }
            };
            requestAnimationFrame(scroll);
        },
        getContainer() {
            if (this.container instanceof Element) {
                return this.container;
            }
            return window;
        },
        needShow() {
            const container = this.getContainer();
            const showHeight = this.attr('show-height') || 400;
            return (container.scrollY || container.scrollTop) >= showHeight;
        },
    },
    lifecycle: {
        mount() {
            this.show = this.needShow();
            const container = this.getContainer();
            container.addEventListener('scroll', () => {
                this.show = this.needShow();
            });
        },
    },
};