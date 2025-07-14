import template from './tabs.html';
import style from './tabs.scss';

export default {
    template,
    style,
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