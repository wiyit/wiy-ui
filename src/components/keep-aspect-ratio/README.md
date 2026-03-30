# Keep Aspect Ratio 保持比例组件

## 简介

Keep Aspect Ratio 组件是 wiy-ui 组件库中的布局组件，用于保持子元素的宽高比例，确保内容在不同屏幕尺寸下的正确显示。

## 用法

### 基础用法

```html
<wiy-keep-aspect-ratio>
    <img src="https://example.com/image.jpg" style="width: 100%; height: 100%;" />
</wiy-keep-aspect-ratio>
```

### 自定义比例

```html
<!-- 16:9 比例 -->
<wiy-keep-aspect-ratio style="aspect-ratio: 16/9;">
    <video src="https://example.com/video.mp4" style="width: 100%; height: 100%;"></video>
</wiy-keep-aspect-ratio>

<!-- 4:3 比例 -->
<wiy-keep-aspect-ratio style="aspect-ratio: 4/3;">
    <canvas style="width: 100%; height: 100%;"></canvas>
</wiy-keep-aspect-ratio>
```

### 响应式布局

```html
<wiy-keep-aspect-ratio style="width: 100%; aspect-ratio: 1/1;">
    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
        <wiy-icon name="image" style="font-size: 48px; color: #ccc;"></wiy-icon>
    </div>
</wiy-keep-aspect-ratio>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 内容插槽，用于放置需要保持比例的子元素 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Keep Aspect Ratio 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 自定义样式变量 */
}
```

## 依赖

本组件无外部依赖。

## 注意事项

1. 组件会自动保持子元素的宽高比例
2. 子元素需要设置 `width: 100%; height: 100%;` 才能正确显示
3. 组件使用 `aspect-ratio` CSS 属性，对于不支持的浏览器会降级处理
4. 支持所有标准的 CSS aspect-ratio 值（如：16/9、4/3、1/1）
5. 组件内部使用 ResizeObserver 监听尺寸变化

## 浏览器兼容性

- Chrome 88+、Firefox 89+、Safari 15+ 支持 aspect-ratio 属性
- 对于不支持的浏览器，组件会尝试使用 padding-top 方法模拟

## 性能优化

1. 组件内部使用 ResizeObserver 监听尺寸变化，性能高效
2. 子元素尺寸变化会自动触发重计算
3. 建议避免在组件内部放置过于复杂的布局结构
