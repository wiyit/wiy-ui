export default {
    template: import('./video.html'),
    style: import('./video.scss'),
    data: {
        src: undefined,
    },
    lifecycle: {
        mount() {
            if (this.hasAttr('autoplay')) {
                const video = this.getElement('video');
                video.muted = true;
            }
        },
    },
};