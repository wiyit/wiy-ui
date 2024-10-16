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
            this.trigger('change', {
                items: this.items,
                active: this.active,
            });
        },
    },
    lifecycle: {
        init() {
            this.onItemClick(this.items[this.active], this.active);
        },
    },
};