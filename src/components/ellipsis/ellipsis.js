export default {
    template: import('./ellipsis.html'),
    style: import('./ellipsis.scss'),
    lifecycle: {
        mount() {
            const lines = this.attr('lines');
            if (lines) {
                const element = this.getElement();
                element.style['-webkit-line-clamp'] = lines;
                element.style['line-clamp'] = lines;
            }
        },
    },
};