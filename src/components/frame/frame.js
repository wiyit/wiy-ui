export default {
    template: import('./frame.html'),
    style: import('./frame.scss'),
    data: {
        src: undefined,
    },
    lifecycle: {
        mount() {
            const element = this.getElement();

            window.addEventListener('message', this.messageEventListener = (e) => {
                const data = e?.data?.['wiy-frame'];
                if (!data) {
                    return;
                }

                if (data.type == 'resize') {
                    element.style.height = data.height + 'px';
                }
            });
        },
        unmount() {
            window.removeEventListener('message', this.messageEventListener);
        },
    },
};