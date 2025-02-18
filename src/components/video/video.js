export default {
    template: import('./video.html'),
    style: import('./video.scss'),
    data: {
        src: undefined,
        poster: undefined,
    },
    methods: {
        oncontextmenu(e) {
            e.preventDefault();
            return false;
        },
    },
    lifecycle: {
        mount() {
            if (this.hasAttr('autoplay')) {
                const video = this.getElement('video');
                video.muted = true;

                this.observe(() => {
                    return this.src;
                }, (result) => {
                    setTimeout(() => {
                        video.play();
                    }, this.attr('autoplay-delay') || 0);
                });
            }
        },
    },
};