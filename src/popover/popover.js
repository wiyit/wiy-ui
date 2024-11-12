export default {
    template: import('./popover.html'),
    style: import('./popover.scss'),
    data: {
        visible: false,
    },
    methods: {
        onMouseenter(e) {
            const popover = this.getElement('popover');
            if (popover) {
                popover.show();
            }
        },
        onMouseleave(e) {
            const popover = this.getElement('popover');
            if (popover) {
                popover.close();
            }
        },
    },
    lifecycle: {
        mount() {
            const popover = this.getElement('popover');
            if (popover) {
                popover.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') {//阻止esc键关闭popover
                        e.preventDefault();
                    }
                });

                const source = this.getElement('source');
                if (this.attr('popover-pos') == 'mouse') {
                    source.addEventListener('mousemove', (e) => {
                        const x = e.clientX + 16;
                        const y = e.clientY + 16;
                        popover.style.left = x + 'px';
                        popover.style.top = y + 'px';
                    });
                }

                this.observe(() => {
                    return this.visible;
                }, (result) => {
                    if (result) {
                        popover.show();
                    } else {
                        popover.close();
                    }
                });
            }
        },
    },
};