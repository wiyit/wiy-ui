export default {
    template: import('./flex.html'),
    style: import('./flex.scss'),
    lifecycle: {
        mount() {
            const element = this.getElement();
            if (this.hasAttr('gap')) {
                element.style.gap = this.attr('gap');
            }
        }
    }
};