export default {
    template: import('./popover.html'),
    style: import('./popover.scss'),
    data: {
        visible: false,
    },
    methods: {
        onMouseenter(e) {
            this.visible = true;
        },
        onMouseleave(e) {
            this.visible = false;
        },
    },
    lifecycle: {
        mount() {
            if (this.attr('popover-pos') == 'mouse') {//当根据鼠标位置定位时，通过popover属性及showPopover、hidePopover方法来显示、隐藏弹出框
                const source = this.getElement('source');
                const popoverContainer = this.getElement('popover-container');
                const popover = this.getElement('popover');

                if (popoverContainer) {
                    popoverContainer.setAttribute('popover', 'manual');//设置popover为manual，不允许点击关闭

                    source.addEventListener('mousemove', (e) => {
                        const x = e.clientX + 16;
                        const y = e.clientY + 16;
                        popover.style.left = x + 'px';
                        popover.style.top = y + 'px';
                    });

                    this.observe(() => {
                        return this.visible;
                    }, (result) => {
                        if (result) {
                            popoverContainer.showPopover();
                        } else {
                            popoverContainer.hidePopover();
                        }
                    });
                }
            }
        },
    },
};