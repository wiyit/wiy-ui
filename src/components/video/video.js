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
        setTime(time) {
            const video = this.getElement('video');
            video.currentTime = time;
        },
        play(time) {
            const video = this.getElement('video');
            if (typeof time != 'undefined') {
                this.setTime(time);
            }
            video.play().catch((e) => {
                video.muted = true;
                video.play();
            });
        },
        pause(time) {
            const video = this.getElement('video');
            if (typeof time != 'undefined') {
                this.setTime(time);
            }
            video.pause();
        },
    },
    lifecycle: {
        mount() {
            if (this.hasAttr('autoplay')) {
                this.observe(() => {
                    return this.src;
                }, (result) => {
                    setTimeout(() => {
                        this.play();
                    }, this.attr('autoplay-delay') || 0);
                });
            }
        },
    },
};