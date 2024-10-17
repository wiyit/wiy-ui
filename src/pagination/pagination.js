export default {
    template: import('./pagination.html'),
    style: import('./pagination.css'),
    data: {
        total: 0,
        current: 0,
        pageSize: 10,
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
                return [
                    this.total,
                    this.current,
                    this.pageSize,
                ];
            }, () => {
                this.current = Math.min(Math.max(this.current, 1), this.getPageCount());// 调整current
                this.items = this.generateItems();// 更新items

                this.trigger('change', {
                    total: this.total,
                    current: this.current,
                    pageSize: this.pageSize,
                });
            });
        },
    },
};