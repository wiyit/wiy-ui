import template from './flex.html';
import style from './flex.scss';

export default {
    template,
    style,
    lifecycle: {
        mount() {
            const element = this.getElement();
            if (this.hasAttr('g')) {
                element.style.gap = this.attr('g');
            }
        }
    }
};