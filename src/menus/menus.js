export default {
    template: import('./menus.html'),
    style: import('./menus.css'),
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
        onItemClick(menu) {
            menu.subShow = !menu.subShow;
            menu.onclick && menu.onclick(this);
        },
    },
};