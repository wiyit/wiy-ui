# Image 图片组件

## 简介

Image 组件是 wiy-ui 组件库中用于展示图片的基础组件，支持图片预览、多图切换、填充方式调整和模糊背景等功能。

## 用法

### 基础用法

```html
<wiy-image src="/path/to/image.jpg"></wiy-image>
```

### 块级显示

```html
<wiy-image block src="/path/to/image.jpg"></wiy-image>
```

### 图片填充方式

```html
<!-- 填充（默认） -->
<wiy-image fit="fill" src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>

<!-- 包含 -->
<wiy-image fit="contain" src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>

<!-- 覆盖 -->
<wiy-image fit="cover" src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>

<!-- 无缩放 -->
<wiy-image fit="none" src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>

<!-- 缩放降级 -->
<wiy-image fit="scale-down" src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>
```

### 模糊背景

```html
<wiy-image blur-background src="/path/to/image.jpg" style="width: 200px; height: 200px;"></wiy-image>
```

### 默认图片

```html
<!-- 当 src 不存在时显示 default -->
<wiy-image default="/path/to/default.jpg"></wiy-image>
```

### Data 绑定

```html
<wiy-image wiy:data-src="this.imageSrc"></wiy-image>
```

```javascript
export default {
    data: {
        imageSrc: '/path/to/image.jpg',
    },
    methods: {
        changeImage() {
            this.imageSrc = '/path/to/another-image.jpg';
        },
    },
};
```

### 图片预览

```html
<wiy-image wiy:data-src-list="this.images" src="/path/to/first.jpg"></wiy-image>
```

```javascript
export default {
    data: {
        images: [
            '/path/to/image1.jpg',
            '/path/to/image2.jpg',
            '/path/to/image3.jpg',
        ],
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | - | 图片地址 |
| default | string | - | 默认图片地址（当 src 不存在时显示） |
| fit | string | 'fill' | 图片填充方式，可选值：`fill`、`contain`、`cover`、`none`、`scale-down` |
| block | boolean | false | 是否块级显示 |
| blur-background | boolean | false | 是否显示模糊背景 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | undefined | 图片地址内部数据（支持 Data 绑定） |
| srcList | array | [] | 图片列表，用于预览时切换（支持 Data 绑定） |
| current | number | undefined | 当前预览图片索引（内部状态） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| click | 点击图片时 | event | 点击事件，用于打开预览 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getCurrentPreviewSrc() | 无 | string | 获取当前预览的图片地址 |
| closePreview() | 无 | void | 关闭预览对话框 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Image 组件使用标准 CSS 属性，无需额外 CSS 变量配置。可通过标准 CSS 样式覆盖组件样式。

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示预览对话框中的图标 |
| 组件 | wiy-flex | 用于布局预览对话框 |

## 注意事项

1. 图片默认使用 `loading="lazy"` 懒加载
2. 点击图片会打开预览对话框（仅当 `srcList` 不为空时）
3. 预览对话框支持左右切换图片和关闭
4. 模糊背景使用模糊和灰度滤镜效果
5. 填充方式 `fit` 对应 CSS 的 `object-fit` 属性
6. 块级显示（block）会将组件设置为 `display: block`
7. 预览对话框使用原生 HTML5 `<dialog>` 元素
8. 组件销毁前会自动关闭预览对话框
