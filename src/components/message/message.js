function getLayer(position) {
    const layerId = `wiy-message-layer-${position}`;
    let layer = document.getElementById(layerId);
    if (!layer) {
        layer = document.createElement('div');
        layer.setAttribute('id', layerId);
        layer.setAttribute('popover', 'manual');
        layer.style = 'width:100vw;height:100vh;margin:0;padding:10px;box-sizing:border-box;border:none;overflow:visible;background:none;display:flex;flex-direction:column;pointer-events:none;position:fixed;top:0;left:0;';
        switch (position) {
            case 'right-top':
                layer.style.alignItems = 'flex-end';
                break;
            case 'top':
            default:
                layer.style.alignItems = 'center';
                break;
        }
        document.body.appendChild(layer);
    }

    layer.matches(":popover-open") && layer.hidePopover();
    !layer.matches(":popover-open") && layer.showPopover();
    return layer;
}

export default {
    template: import('./message.html'),
    style: import('./message.scss'),
    data: {
        visible: false,
    },
    methods: {
        getIcon() {
            switch (this.attr('theme') || 'info') {
                case 'info':
                    return 'circle-info';
                case 'success':
                    return 'circle-check';
                case 'warning':
                    return 'circle-exclamation';
                case 'error':
                    return 'circle-xmark';
                case 'question':
                    return 'circle-question';
                case 'loading':
                    return 'spinner';
                default:
                    return 'circle-info';
            }
        },
    },
    lifecycle: {
        mount() {
            const position = this.attr('position') || 'static';
            if (position != 'static') {
                const layer = getLayer(position);
                layer.appendChild(this.getElement());
            }

            this.visible = true;
            this.observe(() => {
                return this.visible;
            }, (result) => {
                if (!result) {
                    setTimeout(() => {//消息消失后destroy当前组件
                        this.destroy();
                    }, 500);
                }
            });

            const duration = this.attr('duration') || 3000;
            if (duration >= 0) {
                setTimeout(() => {
                    this.visible = false;
                }, duration);
            }
        },
        unmount(data) {
            data.element.remove();//移除当前组件对应的标签
        },
    },
};
export const methods = {
    showMessage(options) {
        const element = document.createElement('wiy-message');
        options.duration && element.setAttribute('duration', options.duration);
        options.theme && element.setAttribute('theme', options.theme);
        element.setAttribute('position', options.position || 'top');
        options.closable && element.setAttribute('closable', '');
        element.innerHTML = options.content;

        if (typeof HTMLElement?.prototype?.showPopover != 'function') {
            element.setAttribute('duration', -1);
            element.removeAttribute('position');
            element.removeAttribute('closable');
            this.showDialog({
                title: '提示',
                content: element.outerHTML,
            });
            return;
        }

        this.newComponent({
            lifecycle: {
                init() {
                    this.renderElement(element);
                }
            }
        });
    },
};