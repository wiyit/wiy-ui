import template from './breadcrumb.html';
import style from './breadcrumb.css';

export default {
    template,
    style,
    data: {
        items: [],
    },
    methods: {
        onItemClick(item) {
            item.onclick && item.onclick(this);
        },
    },
};