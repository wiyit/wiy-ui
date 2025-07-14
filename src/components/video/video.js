import template from './video.html';
import style from './video.scss';

export default {
    template,
    style,
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
        autoplay(delay) {
            setTimeout(() => {
                this.play();
            }, delay || this.attr('autoplay-delay') || 0);
        },
    },
    lifecycle: {
        mount() {
            if (this.hasAttr('autoplay')) {
                this.observe(() => {
                    return this.src;
                }, (result) => {
                    this.autoplay();
                });
            }
        },
        beforeUnmount() {
            this.pause();
        },
    },
};