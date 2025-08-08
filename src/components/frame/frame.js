import template from './frame.html';
import style from './frame.scss';

export default {
    template,
    style,
    data: {
        src: undefined,
    },
    methods: {
        postMessage(data) {
            const iframe = this.getElement('iframe');
            iframe.contentWindow.postMessage({
                'wiy-frame': data,
            }, '*');
        },
    },
    lifecycle: {
        mount() {
            const element = this.getElement();

            const iframe = this.getElement('iframe');
            iframe.addEventListener('load', this.iframeLoadEventListener = () => {
                this.trigger('load');
            });

            window.addEventListener('message', this.windowMessageEventListener = (e) => {
                const data = e?.data?.['wiy-frame'];
                if (!data) {
                    return;
                }

                if (data.type === 'resize') {
                    element.style.height = data.height + 'px';
                }

                this.trigger('message', data);
            });
        },
        beforeUnmount() {
            const iframe = this.getElement('iframe');
            iframe.removeEventListener('load', this.iframeLoadEventListener);
            window.removeEventListener('message', this.windowMessageEventListener);
        },
    },
};