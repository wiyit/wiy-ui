# Chart 图表组件

## 简介

Chart 组件是 wiy-ui 组件库中的图表组件，基于 ECharts 实现，支持多种图表类型（折线图、柱状图、饼图、地图等），提供丰富的交互和配置选项。

## 用法

### 基础用法

```html
<wiy-chart wiy:data-option="this.chartOption"></wiy-chart>
```

```javascript
export default {
    data: {
        chartOption: {
            title: {
                text: '销售数据',
                left: 'center',
            },
            tooltip: {
                trigger: 'item',
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '销售额',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 1048, name: '产品A' },
                        { value: 735, name: '产品B' },
                        { value: 580, name: '产品C' },
                        { value: 484, name: '产品D' },
                        { value: 300, name: '产品E' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        },
    },
};
```

### 主题设置

```html
<wiy-chart theme="dark" wiy:data-option="this.chartOption"></wiy-chart>
```

### 事件监听

```html
<wiy-chart wiy:data-option="this.chartOption" wiy:onchartinit="this.onChartInit" wiy:onchartclick="this.onChartClick" wiy:onoptionchange="this.onOptionChange"></wiy-chart>
```

```javascript
export default {
    data: {
        chartOption: {
            // 图表配置
        },
    },
    methods: {
        onChartInit({ chart }) {
            console.log('图表初始化完成');
            // 可在此处对图表进行自定义操作
        },
        onChartClick(chartEvent) {
            console.log('图表点击事件:', chartEvent);
        },
        onOptionChange({ option }) {
            console.log('图表配置变化:', option);
        },
    },
};
```

### 地图图表

```html
<wiy-chart wiy:data-option="this.mapOption"></wiy-chart>
```

```javascript
import { importBMap } from '@wiyit/wiy-ui/src/components/chart/chart.js';

export default {
    data: {
        mapOption: {
            bmap: {
                center: [120.13066322374, 30.240018034923],
                zoom: 14,
                roam: true,
                mapStyle: {
                    styleJson: [
                        {
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1',
                            },
                        },
                    ],
                },
            },
            series: [
                {
                    name: '设备分布',
                    type: 'scatter',
                    coordinateSystem: 'bmap',
                    data: [
                        [120.13066322374, 30.240018034923, 100],
                        [120.13203815838, 30.240018034923, 200],
                    ],
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    encode: {
                        value: 2,
                    },
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,
                    },
                    emphasis: {
                        label: {
                            show: true,
                        },
                    },
                },
            ],
        },
    },
    lifecycle: {
        async mount() {
            // 加载百度地图 API（需要传入有效的 ak）
            await importBMap('your_baidu_map_ak');
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| theme | string | - | 图表主题，支持 'light'、'dark' 或自定义主题 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| option | Object | {} | 图表配置项，遵循 ECharts 配置格式 |
| chart | Object | undefined | ECharts 实例，只读 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| chartinit | 图表初始化完成时 | { chart: ECharts实例 } | 图表初始化事件 |
| chartclick | 图表被点击时 | ECharts事件对象 | 图表点击事件 |
| optionchange | 图表配置变化时 | { option: 新配置 } | 配置变化事件 |

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数，但导出以下工具：

| 导出名称 | 说明 |
|----------|------|
| echarts | ECharts 库实例 |
| importBMap | 加载百度地图 API 的函数 |

## 样式 style

Chart 组件默认尺寸：

```css
:host {
    display: block;
    width: 600px;
    height: 400px;

    #container {
        width: 100%;
        height: 100%;
    }
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 库 | ECharts | 图表库核心依赖 |
| 组件 | wiy-map | 地图组件（内部使用） |

## 注意事项

1. 图表容器需要设置明确的宽度和高度，否则图表可能无法显示
2. 图表配置 `option` 遵循 ECharts 配置格式，详细文档请参考 [ECharts 官方文档](https://echarts.apache.org/zh/option.html)
3. 使用地图图表需要加载百度地图 API，并传入有效的 ak（API Key）
4. 图表支持响应式调整，会自动根据容器大小重绘
5. 图表事件监听支持 ECharts 的所有事件类型，可通过 `wiy:onchartxxx` 格式绑定
