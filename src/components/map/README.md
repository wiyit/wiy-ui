# Map 地图组件

## 简介

Map 组件是 wiy-ui 组件库中的地图可视化组件，基于百度地图（Baidu Map）和 MapVGL 实现，提供地图显示、图层管理和地图交互功能，支持 3D 地图可视化。

## 用法

### 基础用法

```html
<wiy-map ak="YOUR_AK" center="116.403748,39.915055" zoom="10"></wiy-map>
```

### 自定义配置

```html
<wiy-map
    ak="YOUR_AK"
    center="116.403748,39.915055"
    zoom="10"
    tilt="45"
    style="width: 100%; height: 500px;">
</wiy-map>
```

### 地图图层

```html
<wiy-map ak="YOUR_AK" center="116.403748,39.915055" zoom="10">
    <map-layer type="heatmap" wiy:data-data="this.heatmapData"></map-layer>
    <map-layer type="point" wiy:data-data="this.pointData"></map-layer>
</wiy-map>
```

```javascript
export default {
    data: {
        heatmapData: [
            [116.403748, 39.915055, 0.5],
            [116.413748, 39.925055, 0.8],
        ],
        pointData: [
            [116.403748, 39.915055],
            [116.413748, 39.925055],
        ],
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| ak | string | - | 百度地图 API 密钥（必填） |
| center | string | '116.403748,39.915055' | 地图中心点坐标（经度,纬度） |
| zoom | number | 10 | 地图缩放级别（1-21） |
| tilt | number | 0 | 地图倾斜角度（0-45） |
| no-background | boolean | false | 是否隐藏地图背景 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| map | object | undefined | 地图实例（内部使用） |
| view | object | undefined | MapVGL 视图实例（内部使用） |
| layers | array | [] | 地图图层列表 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 地图图层插槽，用于放置 map-layer 组件 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| create | 地图初始化完成时 | - | 地图创建完成事件 |

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Map 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 自定义样式变量 */
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 第三方库 | mapvgl | 地图可视化库 |
| 第三方库 | Baidu Map GL | 百度地图 WebGL API |
| 组件 | map-layer | 地图图层组件 |

## 注意事项

1. 组件需要传入 `ak` 属性（百度地图 API 密钥）
2. 组件内部使用 `mapvgl` 库进行地图可视化
3. 支持通过 `map-layer` 组件添加各种地图图层
4. 地图需要在可见区域内才会初始化
5. 组件内部处理了 Shadow DOM 与地图 API 的兼容性问题

## 百度地图 API 密钥申请

1. 访问 [百度地图开放平台](https://lbsyun.baidu.com/)
2. 注册账号并登录
3. 创建应用并获取 API 密钥（AK）
4. 配置应用的安全策略

## 地图类型支持

- **二维地图**：使用 Baidu Map API
- **三维地图**：使用 Baidu Map WebGL API
- **可视化图层**：使用 MapVGL 库支持的多种图层类型

## 性能优化

1. 地图会在可见区域内才会初始化
2. 使用 ResizeObserver 监听尺寸变化
3. 组件会处理地图容器的加载和卸载
4. 建议避免在地图上添加过多复杂图层

## 常见问题

### 地图不显示

- 检查 `ak` 属性是否正确
- 确保地图容器有明确的尺寸
- 检查网络连接是否正常

### 地图加载缓慢

- 减少地图上的图层数量
- 优化地图数据的加载方式
- 考虑使用地图瓦片缓存

### 地图图层不显示

- 检查图层数据格式是否正确
- 确保地图已正确初始化
- 检查地图缩放级别是否适合显示该图层
