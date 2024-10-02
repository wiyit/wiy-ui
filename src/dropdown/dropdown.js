export default {
    template: import('./dropdown.html'),
    style: import('./dropdown.css'),
    data: {
        contentShow: false,
    },
    methods: {
        onButtonClick(e) {
            e.stopPropagation();
            this.contentShow = !this.contentShow;
            this.getApp().getEventBus().trigger('wiycomponentclick', {
                uuid: this.getUuid(),
            });
        },
    },
    lifecycle: {
        init() {
            this.getApp().getEventBus().on('wiycomponentclick', (e) => {
                if (e.data.uuid != this.getUuid()) {
                    this.contentShow = false;
                }
            });
            window.addEventListener('click', () => {
                this.contentShow = false;
            });
        },
    },
};