import template from './pagination.html';
import style from './pagination.scss';

export default {
    template,
    style,
    data: {
        total: 0,
        current: 1,
        pageSize: 10,
        items: [],
    },
    methods: {
        generateItems() {
            const pageButtonCount = 5;
            const pageCount = this.getPageCount();

            const prevPageButtonCount = Math.floor(pageButtonCount / 2);
            const nextPageButtonCount = pageButtonCount - prevPageButtonCount - 1;

            const centerMin = 1 + 2;
            const centerMax = pageCount - 2;

            let min = Math.max(this.current - prevPageButtonCount, centerMin);
            let max = Math.min(this.current + nextPageButtonCount, centerMax);

            const delta = pageButtonCount - (max - min + 1);
            if (delta > 0) {// 中间按钮不够
                if (min > centerMin) {// 向前补齐
                    min = Math.max(min - delta, centerMin);
                } else {// 向后补齐
                    max = Math.min(max + delta, centerMax);
                }
            }

            if (max < min) {// 没有中间按钮
                return Array.from({ length: pageCount }).map((_, i) => i + 1);
            }

            return [
                1,
                min == centerMin ? 1 + 1 : '...',
                ...Array.from({ length: max - min + 1 }, (_, i) => {
                    return min + i;
                }),
                max == centerMax ? pageCount - 1 : '...',
                pageCount,
            ];
        },
        getPageCount() {
            return Math.floor((this.total - 1) / this.pageSize + 1);
        },
    },
    lifecycle: {
        init() {
            this.observe(() => {
                return this.total;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }

                if (this.current != 1) {
                    this.current = 1;// 调整current
                    return;
                }
                this.items = this.generateItems();// 更新items
            });

            this.observe(() => {
                return this.pageSize;
            }, (_, firstObserve) => {
                if (firstObserve) {
                    return;
                }

                if (this.current != 1) {
                    this.current = 1;// 调整current
                    return;
                }
                this.items = this.generateItems();// 更新items

                this.trigger('change', {
                    total: this.total,
                    current: this.current,
                    pageSize: this.pageSize,
                });
            });

            this.observe(() => {
                return this.current;
            }, (result, firstObserve) => {
                this.current = Math.max(Math.min(result, this.getPageCount()), 1);// 调整current
                this.items = this.generateItems();// 更新items

                this.trigger(firstObserve ? 'datainit' : 'change', {
                    total: this.total,
                    current: this.current,
                    pageSize: this.pageSize,
                });
            });
        },
    },
};