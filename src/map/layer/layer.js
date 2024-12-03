import * as mapvgl from 'mapvgl';

export default {
    data: {
        layer: undefined,
        options: {},
        data: [],
    },
    lifecycle: {
        mount() {
            const parent = this.getParent();
            parent.on('create', () => {
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

                parent.view.addLayer(this.layer);
            });
        },
        unmount(data) {
            const parent = data.parent;
            parent.view.removeLayer(this.layer);
        },
    },
};