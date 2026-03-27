import template from './keep-aspect-ratio.html';
import style from './keep-aspect-ratio.scss';

export default {
    template,
    style,
    lifecycle: {
        mount() {
            const outer = this.getElement('outer');
            const inner = this.getElement('inner');

            const transform = () => {
                const scale = Math.min(outer.offsetWidth / inner.offsetWidth, outer.offsetHeight / inner.offsetHeight);
                inner.style.transform = `scale(${scale})`;
            };

            const observer = new ResizeObserver(transform);
            observer.observe(outer);
            observer.observe(inner);
        }
    }
};