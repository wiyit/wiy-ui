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
        mount() {
            const container = this.getElement('container');

            const update = () => {
                const width = container.clientWidth;
                const height = container.clientHeight;

                if (this.map) {//有地图
                } else {//没有地图
                    if (width > 0 && height > 0) {//地图变为可见，则初始化地图
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
                        const tilt = this.attr('tilt') || 0;
                        const centerPoint = new BMapGL.Point(...center.split(',').map(parseFloat));
                        this.map.centerAndZoom(centerPoint, zoom);
                        this.map.setZoom(zoom);//缩放到精确的数值
                        this.map.setTilt(tilt);
                        this.map.enableResizeOnCenter();
                        this.trigger('create');
                    }
                }
            };

            loadBMapGL(this.attr('ak')).then(() => {
                new ResizeObserver(() => {
                    requestAnimationFrame(update);
                }).observe(container);
            });
        },
        unmount() {
            this.view && this.view.destroy();
            this.map && this.map.destroy();
        },
    },
};