import template from './dropdown.html';
import style from './dropdown.scss';

export default {
    template,
    style,
    data: {
        contentShow: false,
    },
    methods: {
        onButtonClick() {
            this.contentShow = !this.contentShow;
        },
    },
    lifecycle: {
        init() {
            window.addEventListener('click', (e) => {
                if (!this.onEventPath(e)) {
                    this.contentShow = false;
                }
            });
        },
    },
};