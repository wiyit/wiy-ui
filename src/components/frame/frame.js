export default {
    template: import('./frame.html'),
    style: import('./frame.scss'),
    data: {
        src: undefined,
    },
    lifecycle: {
        mount() {
            const element = this.getElement();

            window.addEventListener('message', (e) => {
                if (!e.data) {
                    return;
                }
                const data = e.data['wiy-frame'];
                if (!data) {
                    return;
                }

                if (data.type == 'resize') {
                    element.style.height = data.height + 'px';
                }
            });
        },
    },
};