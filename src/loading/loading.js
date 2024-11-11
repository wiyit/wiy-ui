export default {
    template: import('./loading.html'),
    style: import('./loading.scss'),
    data: {
        loading: false,
    },
    lifecycle: {
        mount() {
            const mask = this.getElement('mask');
            mask.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {//阻止esc键关闭mask
                    e.preventDefault();
                }
            });

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