export default {
    template: import('./loading.html'),
    style: import('./loading.scss'),
    data: {
        loading: false,
    },
    lifecycle: {
        mount() {
            if (this.hasAttr('fullscreen')) {//当需要显示全屏加载中时，通过showModal、close方法来显示、隐藏遮罩
                const mask = this.getElement('mask');

                mask.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {//阻止esc键关闭遮罩
                        e.preventDefault();
                    }
                });

                this.observe(() => {
                    return this.loading;
                }, (result) => {
                    if (result) {
                        !mask.open && mask.showModal();
                    } else {
                        mask.open && mask.close();
                    }
                });
            }
        },
        beforeUnmount() {
            const mask = this.getElement('mask');
            mask.open && mask.close();
        },
    },
};