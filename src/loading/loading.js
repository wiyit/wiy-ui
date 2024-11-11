export default {
    template: import('./loading.html'),
    style: import('./loading.scss'),
    data: {
        loading: false,
    },
    lifecycle: {
        mount() {
            const mask = this.getElement('mask');
            this.observe(() => {
                return this.loading;
            }, (result) => {
                if (result) {
                    if (this.hasAttr('fullscreen')) {
                        mask.showModal();
                    } else {
                        mask.show();
                    }
                } else {
                    mask.close();
                }
            });
        },
    },
};