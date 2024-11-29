import * as mapvgl from 'mapvgl';

export default {
    data: {
        layer: undefined,
        options: {},
        data: [],
    },
    lifecycle: {
        mount() {
            Object.defineProperty(this, 'layer', {
                writable: false,
                value: new mapvgl[this.attr('type')](),
            });

            this.observe(() => {
                return this.options;
            }, (result) => {
                this.layer.setOptions(result);
            });

            this.observe(() => {
                return this.data;
            }, (result) => {
                this.layer.setData(result);
            });

            const parent = this.getParent();
            parent.on('mount', () => {
                parent.view.addLayer(this.layer);
            });
            parent.on('unmount', () => {
                parent.view.removeLayer(this.layer);
            });
        },
    },
};