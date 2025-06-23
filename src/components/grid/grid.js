export default {
    template: import('./grid.html'),
    style: import('./grid.scss'),
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
            if (this.hasAttr('gtc')) {
                element.style.gridTemplateColumns = this.attr('gtc');
            }
        }
    }
};