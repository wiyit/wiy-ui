import template from './grid.html';
import style from './grid.scss';

export default {
    template,
    style,
    lifecycle: {
        mount() {
            const element = this.getElement();
            if (this.hasAttr('g')) {
                element.style.gap = this.attr('g');
            }
            if (this.hasAttr('rg')) {
                element.style.rowGap = this.attr('rg');
            }
            if (this.hasAttr('cg')) {
                element.style.columnGap = this.attr('cg');
            }
            if (this.hasAttr('tr')) {
                element.style.gridTemplateRows = this.attr('tr');
            }
            if (this.hasAttr('tc')) {
                element.style.gridTemplateColumns = this.attr('tc');
            }
        }
    }
};