export default {
    template: import('./menus.html'),
    style: import('./menus.scss'),
    data: {
        items: [],
    },
    methods: {
        async getItems() {
            this.actualItems = await this.actual(this.items);
            return this.actualItems;//返回响应式结果
        },
        getLevel() {
            return parseInt(this.attr('level')) || 0;
        },
        isOpened(menu) {
            return menu.sub && menu.sub.length > 0 && menu.subShow;
        },
        isActive(menu) {
            return menu.isActive && menu.isActive(this, menu);
        },
        needShow(menu) {
            return !menu.when || menu.when(this, menu);
        },
        onItemClick(menu) {
            menu.subShow = !menu.subShow;
            menu.onclick && menu.onclick(this, menu);
        },
    },
};