# Flex 弹性布局组件

## 简介

Flex 组件是 wiy-ui 组件库中基于 CSS Flexbox 的布局组件，提供快速、灵活的弹性布局能力，支持各种常见的布局场景。

## 用法

### 基础用法

```html
<wiy-flex>
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-flex>
```

### 垂直布局

```html
<wiy-flex v>
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-flex>
```

### 内联布局

```html
<wiy-flex i>
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>
```

### 主轴对齐

```html
<!-- 居中对齐 -->
<wiy-flex jc="center">
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>

<!-- 两端对齐 -->
<wiy-flex jc="space-between">
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>

<!-- 均匀分布 -->
<wiy-flex jc="space-around">
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>
```

### 交叉轴对齐

```html
<!-- 居中对齐 -->
<wiy-flex ai="center" style="height: 100px;">
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>

<!-- 底部对齐 -->
<wiy-flex ai="flex-end" style="height: 100px;">
    <div>项目1</div>
    <div>项目2</div>
</wiy-flex>
```

### 间距设置

```html
<wiy-flex g="10px">
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-flex>
```

### 换行

```html
<wiy-flex w>
    <div style="width: 200px;">项目1</div>
    <div style="width: 200px;">项目2</div>
    <div style="width: 200px;">项目3</div>
</wiy-flex>
```

### 反向排列

```html
<!-- 水平反向 -->
<wiy-flex r>
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-flex>

<!-- 垂直反向 -->
<wiy-flex v r>
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-flex>
```

### 子元素对齐

```html
<wiy-flex style="height: 100px;">
    <div as="flex-start">顶部</div>
    <div as="center">居中</div>
    <div as="flex-end">底部</div>
</wiy-flex>
```

### 复杂布局组合

```html
<!-- 居中布局 -->
<wiy-flex jc="center" ai="center" style="height: 200px;">
    <div>居中内容</div>
</wiy-flex>

<!-- 两端对齐，中间居中 -->
<wiy-flex jc="space-between" ai="center">
    <div>左侧</div>
    <div>中间</div>
    <div>右侧</div>
</wiy-flex>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| i | boolean | false | 是否为内联弹性布局（inline-flex） |
| v | boolean | false | 是否垂直方向排列（flex-direction: column） |
| r | boolean | false | 是否反向排列（row-reverse 或 column-reverse） |
| w | string/boolean | - | 换行方式，可选值：`wrap`、`nowrap`、`wrap-reverse`，设置为布尔值 true 时等同于 `wrap` |
| jc | string | - | 主轴对齐方式，可选值：`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`space-evenly` |
| ai | string | - | 交叉轴对齐方式，可选值：`flex-start`、`flex-end`、`center`、`baseline`、`stretch` |
| ac | string | - | 多行对齐方式，可选值：`flex-start`、`flex-end`、`center`、`space-between`、`space-around`、`stretch` |
| g | string | - | 子元素间距（gap），如：`10px`、`1rem` |

### 子元素属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| as | string | - | 子元素自身对齐方式，可选值：`auto`、`flex-start`、`flex-end`、`center`、`baseline`、`stretch` |

## 数据 data

本组件无内部响应式数据定义。

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 布局内容插槽，用于插入需要弹性布局的子元素 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

本组件直接使用 CSS Flexbox 属性，无需额外 CSS 变量配置。可通过标准 CSS 样式覆盖组件样式。

## 依赖

无依赖其他组件或第三方库。

## 注意事项

1. 组件默认为水平布局（flex-direction: row）
2. 垂直布局使用 `v` 属性，等同于 flex-direction: column
3. 反向布局 `r` 属性可与 `v` 属性组合使用
4. `g` 属性通过 JavaScript 在 mount 生命周期动态设置 gap 样式
5. 子元素的 `as` 属性通过 ::slotted() 选择器实现，需设置在直接子元素上
6. 多行文对齐 `ac` 属性仅在换行（w 属性设置）时生效
7. 完整的 Flexbox 用法请参考 CSS 标准文档
