export default {
    template: import('./breadcrumb.html'),
    style: import('./breadcrumb.css'),
    data: {
        list: [],
    },
    methods: {
        onItemClick(item) {
            item.onclick && item.onclick();
        },
    },
};