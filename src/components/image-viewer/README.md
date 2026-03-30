# Image Viewer 图片查看器组件

## 简介

Image Viewer 组件是 wiy-ui 组件库中的图片查看组件，提供图片的查看、轮播和导航功能，支持全屏查看和响应式布局。

## 用法

### 基础用法

```html
<wiy-image-viewer wiy:data-items="this.images" wiy:data-active="this.activeIndex"></wiy-image-viewer>
```

```javascript
export default {
    data: {
        images: [
            {
                name: '图片1',
                url: 'https://example.com/image1.jpg'
            },
            {
                name: '图片2',
                url: 'https://example.com/image2.jpg'
            },
        ],
        activeIndex: 0,
    },
};
```

### 自定义样式

```html
<wiy-image-viewer style="width: 100%; height: 400px;" wiy:data-items="this.images"></wiy-image-viewer>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | array | [] | 图片数组，每个对象包含 `name`（图片名称）和 `url`（图片地址） |
| active | number | 0 | 当前显示的图片索引 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 自定义内容插槽（内部已使用，不建议覆盖） |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Image Viewer 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 自定义样式变量 */
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于布局 |
| 组件 | wiy-carousel | 用于图片轮播 |

## 注意事项

1. 组件需要传入 `items` 数据来显示图片
2. `items` 数组中的每个对象必须包含 `name` 和 `url` 属性
3. 组件会自动适应容器大小，建议设置固定宽高
4. 支持全屏查看功能，通过点击图片可进入全屏模式
5. 支持键盘导航（左右箭头）和手势滑动（移动端）
