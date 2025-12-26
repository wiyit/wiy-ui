import template from './scroll.html';
import style from './scroll.scss';

export default {
    template,
    style,
    data: {
        autoScroll: {
            enabled: false,
            heightPerSecond: 30,
            startDelay: 2000,
            endDelay: 2000,
            startTimeoutId: undefined,
            endTimeoutId: undefined,
            id: undefined,
        },
    },
    methods: {
        startAutoScroll() {
            this.stopAutoScroll();

            const outer = this.getElement();
            const inner = this.getElement('inner');

            this.autoScroll.startTimeoutId = setTimeout(() => {//延迟startDelay之后，再正式开始自动滚动
                const start = performance.now();
                const startScrollTop = outer.scrollTop;
                const maxScrollTop = inner.offsetHeight - outer.offsetHeight;

                const update = () => {
                    const interval = performance.now() - start;
                    const offset = this.autoScroll.heightPerSecond * interval / 1000;
                    const newScrollTop = startScrollTop + offset;
                    if (newScrollTop > maxScrollTop) {//自动滚动到底部后
                        this.stopAutoScroll();//停止自动滚动
                        this.autoScroll.endTimeoutId = setTimeout(() => {//延迟endDelay之后
                            outer.scrollTop = 0;//自动滚动到顶部
                            this.startAutoScroll();//开始自动滚动
                        }, this.autoScroll.endDelay);
                    } else {
                        outer.scrollTop = newScrollTop;
                        this.autoScroll.id = requestAnimationFrame(update);
                    }
                };
                this.autoScroll.id = requestAnimationFrame(update);
            }, this.autoScroll.startDelay);
        },
        stopAutoScroll() {
            clearTimeout(this.autoScroll.startTimeoutId);
            clearTimeout(this.autoScroll.endTimeoutId);
            cancelAnimationFrame(this.autoScroll.id);
        },
    },
    lifecycle: {
        mount() {
            this.observe(() => {
                return this.autoScroll.enabled;
            }, ({ result }) => {
                if (result) {
                    this.startAutoScroll();
                } else {
                    this.stopAutoScroll();
                }
            });
        },
        beforeUnmount() {
            this.stopAutoScroll();
        },
    },
    listeners: {
        mousemove() {
            this.autoScroll.enabled && this.stopAutoScroll();
        },
        mouseout() {
            this.autoScroll.enabled && this.startAutoScroll();
        },
    },
};