export default {
    template: import('./menus.html'),
    style: import('./menus.scss'),
    components: {
        'sub-menus': import('./menus.js'),
    },
    data: {
        items: [],
    },
    methods: {
        isOpened(menu) {
            return menu.sub && menu.sub.length > 0 && menu.subShow;
        },
        isActive(menu) {
            return menu.isActive && menu.isActive(this);
        },
        needShow(menu) {
            return !menu.when || menu.when(this, menu);
        },
        onItemClick(menu) {
            menu.subShow = !menu.subShow;
            menu.onclick && menu.onclick(this);
        },
    },
};