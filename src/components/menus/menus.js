import template from './menus.html';
import style from './menus.scss';

export default {
    template,
    style,
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
            if (menu.onclick) {
                menu.subShow = true;
                menu.onclick(this, menu);
            } else {
                menu.subShow = !menu.subShow;
            }
        },
        onAngleClick(e, menu) {
            e.stopPropagation();
            menu.subShow = !menu.subShow;
        }
    },
};