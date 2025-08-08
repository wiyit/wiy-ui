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
        mount() {
            window.addEventListener('click', this.windowClickEventListener = (e) => {
                if (!this.onEventPath(e)) {
                    this.contentShow = false;
                }
            });
        },
        unmount() {
            window.removeEventListener('click', this.windowClickEventListener);
        },
    },
};