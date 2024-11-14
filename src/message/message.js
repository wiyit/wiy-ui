function getLayer(position) {
    const layerId = `wiy-message-layer-${position}`;
    let layer = document.getElementById(layerId);
    if (layer) {
        return layer;
    }

    layer = document.createElement('div');
    layer.setAttribute('id', layerId);
    layer.setAttribute('popover', 'manual');
    layer.style = 'width:100vw;height:100vh;margin:0;padding:10px;box-sizing:border-box;border:none;overflow:visible;background:none;display:flex;flex-direction:column;pointer-events:none;';
    switch (position) {
        case 'top':
            layer.style.alignItems = 'center';
            break;
        case 'top-right':
            layer.style.alignItems = 'flex-end';
            break;
        default:
            layer.style.alignItems = 'flex-start';
            break;
    }
    document.body.appendChild(layer);

    layer.showPopover();
    return layer;
}

export default {
    template: import('./message.html'),
    style: import('./message.scss'),
    data: {
        visible: true,
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
                layer.appendChild(this._element);
            }

            const duration = this.attr('duration') || 3000;
            if (duration >= 0) {
                setTimeout(() => {
                    this.visible = false;
                }, duration);
            }
        },
    },
};