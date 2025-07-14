import template from './frame.html';
import style from './frame.scss';

export default {
    template,
    style,
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

                this.trigger('message', data);
            });
        },
        unmount() {
            window.removeEventListener('message', this.messageEventListener);
        },
    },
};