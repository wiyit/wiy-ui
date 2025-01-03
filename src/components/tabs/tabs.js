export default {
    template: import('./tabs.html'),
    style: import('./tabs.scss'),
    data: {
        items: [],
        active: 0,
    },
    methods: {
        onItemClick(item, index) {
            this.active = index;
        },
    },
};