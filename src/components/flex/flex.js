export default {
    template: import('./flex.html'),
    style: import('./flex.scss'),
    lifecycle: {
        mount() {
            const element = this.getElement();
            element.style.gap = this.attr('gap') || '0';
        }
    }
};