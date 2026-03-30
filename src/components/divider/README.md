# Divider 分割线组件

## 简介

Divider 组件是 wiy-ui 组件库中用于分隔内容的基础组件，支持水平和垂直两种方向，可添加文字说明。

## 用法

### 基础用法

```html
<!-- 水平分割线 -->
<wiy-divider></wiy-divider>

<!-- 垂直分割线 -->
<wiy-divider vertical></wiy-divider>
```

### 带内容的分割线

```html
<!-- 中间内容（默认） -->
<wiy-divider>分隔内容</wiy-divider>

<!-- 左侧内容 -->
<wiy-divider content-pos="start">分隔内容</wiy-divider>

<!-- 右侧内容 -->
<wiy-divider content-pos="end">分隔内容</wiy-divider>
```

### 虚线分割线

```html
<!-- 虚线分割线 -->
<wiy-divider dashed></wiy-divider>

<!-- 带内容的虚线分割线 -->
<wiy-divider dashed>虚线分割</wiy-divider>
```

### 垂直分割线

```html
<wiy-divider vertical></wiy-divider>

<wiy-divider vertical>
    <wiy-icon name="circle" style="font-size: 12px;"></wiy-icon>
</wiy-divider>
```

### 组合使用

```html
<!-- 在内容区域使用 -->
<div>
    <h3>上方内容</h3>
    <wiy-divider></wiy-divider>
    <p>下方内容</p>
</div>

<!-- 在导航栏使用 -->
<wiy-flex>
    <span>首页</span>
    <wiy-divider vertical></wiy-divider>
    <span>产品</span>
    <wiy-divider vertical></wiy-divider>
    <span>关于</span>
</wiy-flex>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| content-pos | string | 'center' | 内容位置，可选值：`start`（左/上）、`center`（中）、`end`（右/下） |
| dashed | boolean | false | 是否显示虚线 |
| vertical | boolean | false | 是否垂直分割线 |

## 数据 data

本组件无内部响应式数据定义。

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 分割线内容插槽，用于插入自定义内容 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Divider 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-divider-color: #e8e8e8;
    --wiy-divider-text-color: #666;
}
```

## 依赖

无依赖其他组件或第三方库。

## 注意事项

1. 默认情况下是水平分割线，宽度 100%
2. 垂直分割线需要父元素有高度才能正确显示
3. 分割线内容支持插槽插入自定义内容
4. vertical 属性和 dashed 属性可以同时使用
5. content-pos 适用于水平和垂直两种方向
