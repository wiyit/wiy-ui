export default {
    template: import('./breadcrumb.html'),
    style: import('./breadcrumb.css'),
    data: {
        items: [],
    },
    methods: {
        onItemClick(item) {
            item.onclick && item.onclick(this);
        },
    },
};