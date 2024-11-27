import * as mapvgl from 'mapvgl';

const promiseMap = {};
function loadBMapGL(ak) {
    return promiseMap[ak] || (promiseMap[ak] = new Promise((resolve, reject) => {
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
            const container = this.getElement('container');

            // 1. 创建地图实例
            var bmapgl = new BMapGL.Map(container);
            var point = new BMapGL.Point(116.403748, 39.915055);
            bmapgl.centerAndZoom(point, 17);

            // 2. 创建MapVGL图层管理器
            var view = new mapvgl.View({
                map: bmapgl
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