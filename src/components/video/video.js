export default {
    template: import('./video.html'),
    style: import('./video.scss'),
    data: {
        src: undefined,
    },
    lifecycle: {
        mount() {
            const video = this.getElement('video');
            console.log(video)
            video.addEventListener('ended', () => {
                this.trigger('ended');
            });
        },
    },
};