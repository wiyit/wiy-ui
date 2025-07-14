import template from './keep-aspect-radio.html';
import style from './keep-aspect-radio.scss';

export default {
    template,
    style,
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