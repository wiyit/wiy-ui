function getLayer() {
    const layerTagName = 'wiy-message-layer';
    let layer = document.getElementsByTagName(layerTagName)[0];
    if (layer) {
        return layer;
    }

    layer = document.createElement(layerTagName);
    layer.setAttribute('popover', 'manual');
    layer.style = 'margin:10px auto;padding:0;border:none;overflow:visible;background:none;display:flex;flex-direction:column;align-items:center;';
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