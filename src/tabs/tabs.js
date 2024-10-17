export default {
    template: import('./tabs.html'),
    style: import('./tabs.css'),
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