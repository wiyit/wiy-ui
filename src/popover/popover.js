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
            const popover = this.getElement('popover');
            if (popover) {
                const source = this.getElement('source');
                if (this.attr('popover-pos') == 'mouse') {
                    source.addEventListener('mousemove', (e) => {
                        const x = e.clientX + 16;
                        const y = e.clientY + 16;
                        popover.style.left = x + 'px';
                        popover.style.top = y + 'px';
                    });
                }
            }
        },
    },
};