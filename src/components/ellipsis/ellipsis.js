import template from './ellipsis.html';
import style from './ellipsis.scss';

export default {
    template,
    style,
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