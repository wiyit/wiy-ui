import * as mapvgl from 'mapvgl';

const getComputedStyle_old = window.getComputedStyle;
window.getComputedStyle = (...args) => {//hack，百度地图需要向上查找所有父节点来获取鼠标位置，遇到shadow dom，会出现问题
    if (args[0].nodeType == Node.DOCUMENT_FRAGMENT_NODE) {//shadow dom中的root
        return {};
    }
    return getComputedStyle_old(...args);
};

let promise;
function loadBMapGL(ak) {
    return promise || (promise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://api.map.baidu.com/getscript?v=1.0&type=webgl&ak=' + ak;
        script.onload = () => {
            resolve();
        };
        document.head.appendChild(script);
    }));
}

export default {
    template: import('./map.html'),
    style: import('./map.scss'),
    components: {
        'map-layer': import('./layer/layer.js'),
    },
    data: {
        map: undefined,
        view: undefined,
        layers: [],
    },
    lifecycle: {
        async mount() {
            await loadBMapGL(this.attr('ak'));

            const container = this.getElement('container');

            new ResizeObserver(() => {
                if (this.map) {
                    return;
                }

                if (container.clientWidth && container.clientHeight) {
                    // 创建地图实例
                    Object.defineProperty(this, 'map', {
                        writable: false,
                        value: new BMapGL.Map(container),
                    });

                    // 创建MapVGL图层管理器
                    Object.defineProperty(this, 'view', {
                        writable: false,
                        value: new mapvgl.View({
                            map: this.map,
                        }),
                    });

                    const center = this.attr('center') || '116.403748,39.915055';//默认天安门
                    const zoom = this.attr('zoom') || 10;
                    const centerPoint = new BMapGL.Point(...center.split(',').map(v => {
                        return parseFloat(v);
                    }));
                    this.map.centerAndZoom(centerPoint, zoom);

                    this.trigger('create');
                }
            }).observe(container);
        },
    },
};