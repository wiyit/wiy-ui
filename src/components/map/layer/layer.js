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
                    const options = this.raw(result);
                    this.layer.setOptions(options);
                });

                this.observe(() => {
                    return this.data;
                }, (result) => {
                    const data = this.raw(result);
                    this.layer.setData(data);
                });

                parent.view.addLayer(this.layer);
            });
        },
        unmount(data) {
            const parent = data.parent;
            parent.view && this.layer && parent.view.removeLayer(this.layer);
        },
    },
};