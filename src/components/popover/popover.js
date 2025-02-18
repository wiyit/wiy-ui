export default {
    template: import('./popover.html'),
    style: import('./popover.scss'),
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
            if (this.attr('popover-pos') == 'mouse') {//当根据鼠标位置定位时，通过showPopover、hidePopover方法来显示、隐藏弹出框
                const source = this.getElement('source');
                const popoverContainer = this.getElement('popover-container');
                const popover = this.getElement('popover');

                if (popoverContainer) {
                    source.addEventListener('mousemove', (e) => {
                        const x = e.clientX + 16;
                        const y = e.clientY + 16;
                        popover.style.left = x + 'px';
                        popover.style.top = y + 'px';
                    });

                    this.observe(() => {
                        return this.visible;
                    }, (result) => {
                        if (!popoverContainer.isConnected) {
                            return;
                        }
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