export default {
    template: import('./keep-aspect-radio.html'),
    style: import('./keep-aspect-radio.scss'),
    lifecycle: {
        mount() {
            const outer = this.getElement('outer');
            const inner = this.getElement('inner');

            const transform = () => {
                const aspectRatio = Math.min(outer.offsetWidth / inner.offsetWidth, outer.offsetHeight / inner.offsetHeight);
                inner.style.transform = `scale(${aspectRatio})`;
            };

            const observer = new ResizeObserver(transform);
            observer.observe(outer);
            observer.observe(inner);
        }
    }
};