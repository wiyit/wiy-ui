import template from './popover.html';
import style from './popover.scss';

export default {
    template,
    style,
    data: {
        visible: false,
    },
    methods: {
        onMouseenter(e) {
            if (!e.buttons) {//只有当鼠标未按下时才显示弹出框
                this.visible = true;
            }
        },
        onMouseleave(e) {
            if (!e.buttons) {//只有当鼠标未按下时才隐藏弹出框
                this.visible = false;
            }
        },
    },
    lifecycle: {
        mount() {
            if (this.attr('popover-pos') === 'mouse') {//当根据鼠标位置定位时，通过showPopover、hidePopover方法来显示、隐藏弹出框
                const source = this.getElement('source');
                const popoverContainer = this.getElement('popover-container');
                const popover = this.getElement('popover');

                if (popoverContainer) {
                    const offset = 16;
                    const position = (x, y) => {
                        if (x + popover.offsetWidth > window.innerWidth) {
                            x = x - popover.offsetWidth - offset * 2;
                        }
                        if (y + popover.offsetHeight > window.innerHeight) {
                            y = y - popover.offsetHeight - offset * 2;
                        }

                        popover.style.left = x + 'px';
                        popover.style.top = y + 'px';
                    }

                    this.sourceMouseonEventListener = (e) => {
                        position(e.clientX + offset, e.clientY + offset);
                    };
                    source.addEventListener('mousemove', this.sourceMouseonEventListener);
                    source.addEventListener('mouseenter', this.sourceMouseonEventListener);

                    new ResizeObserver(() => {
                        position(popover.offsetLeft, popover.offsetTop);
                    }).observe(popover);

                    this.observe(() => {
                        return this.visible;
                    }, ({ result }) => {
                        if (result) {
                            !popoverContainer.matches(":popover-open") && popoverContainer.showPopover();
                        } else {
                            popoverContainer.matches(":popover-open") && popoverContainer.hidePopover();
                        }
                    });
                }
            }
        },
        beforeUnmount() {
            const source = this.getElement('source');
            source.removeEventListener('mousemove', this.sourceMouseonEventListener);
            source.removeEventListener('mouseenter', this.sourceMouseonEventListener);
        }
    },
};