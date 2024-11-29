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
    lifecycle: {
        async init() {
            await loadBMapGL(this.attr('ak'));
        },
        mount() {
            const element = this.getElement();
            const container = this.getElement('inner-container');
            container.style.width = element.clientWidth + 'px';
            container.style.height = element.clientHeight + 'px';

            // 1. 创建地图实例
            var map = new BMapGL.Map(container);
            map.addControl(new BMapGL.ScaleControl());    //比例尺

            var point = new BMapGL.Point(116.403748, 39.915055);
            map.centerAndZoom(point, 17);
            map.enableScrollWheelZoom(true);

            // 2. 创建MapVGL图层管理器
            var view = new mapvgl.View({
                map,
            });

            // 3. 创建可视化图层，并添加到图层管理器中
            var layer = new mapvgl.PointLayer({
                color: 'rgba(50, 50, 200, 1)',
                blend: 'lighter',
                size: 2
            });
            view.addLayer(layer);

            // 4. 准备好规范化坐标数据
            var data = [{
                geometry: {
                    type: 'Point',
                    coordinates: [116.403748, 39.915055]
                }
            }];

            // 5. 关联图层与数据，享受震撼的可视化效果
            layer.setData(data);
        },
    },
};