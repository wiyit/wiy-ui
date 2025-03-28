export default {
    template: import('./dropdown.html'),
    style: import('./dropdown.scss'),
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