export default {
    template: import('./menus.html'),
    style: import('./menus.css'),
    components: {
        'sub-menus': import('./menus.js'),
    },
    data: {
        list: [],
    },
    methods: {
        isOpened(menu) {
            return menu.sub && menu.sub.length > 0 && menu.subShow;
        },
        onItemClick(menu) {
            menu.subShow = !menu.subShow;
            menu.onclick && menu.onclick();
        },
    },
};