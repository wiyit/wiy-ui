# Grid 网格布局组件

## 简介

Grid 组件是 wiy-ui 组件库中基于 CSS Grid 的网格布局组件，提供强大的二维布局能力，支持行列配置、对齐方式和间距设置。

## 用法

### 基础用法

```html
<wiy-grid tc="1fr 1fr 1fr" g="10px">
    <div style="background: #1890ff;">项目1</div>
    <div style="background: #52c41a;">项目2</div>
    <div style="background: #faad14;">项目3</div>
    <div style="background: #ff4d4f;">项目4</div>
    <div style="background: #722ed1;">项目5</div>
    <div style="background: #eb2f96;">项目6</div>
</wiy-grid>
```

### 列模板

```html
<!-- 等宽3列 -->
<wiy-grid tc="repeat(3, 1fr)">
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-grid>

<!-- 固定宽度列 -->
<wiy-grid tc="100px 200px 100px">
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
</wiy-grid>

<!-- 自适应列 -->
<wiy-grid tc="auto 1fr auto">
    <div>左侧</div>
    <div>中间</div>
    <div>右侧</div>
</wiy-grid>
```

### 行模板

```html
<wiy-grid tr="100px 200px" tc="1fr 1fr">
    <div style="background: #1890ff;">第一行第一列</div>
    <div style="background: #52c41a;">第一行第二列</div>
    <div style="background: #faad14;">第二行第一列</div>
    <div style="background: #ff4d4f;">第二行第二列</div>
</wiy-grid>
```

### 间距设置

```html
<!-- 统一间距 -->
<wiy-grid tc="1fr 1fr" g="20px">
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
    <div>项目4</div>
</wiy-grid>

<!-- 分别设置行列间距 -->
<wiy-grid tc="1fr 1fr" rg="10px" cg="20px">
    <div>项目1</div>
    <div>项目2</div>
    <div>项目3</div>
    <div>项目4</div>
</wiy-grid>
```

### 网格项对齐

```html
<!-- 网格项对齐 -->
<wiy-grid tc="1fr 1fr" tr="100px 100px" ji="center" ai="center">
    <div style="background: #1890ff;">居中</div>
    <div style="background: #52c41a;">居中</div>
    <div style="background: #faad14;">居中</div>
    <div style="background: #ff4d4f;">居中</div>
</wiy-grid>
```

### 内容对齐

```html
<!-- 网格容器内内容对齐 -->
<wiy-grid tc="100px 100px" style="width: 400px; height: 300px;" jc="center" ac="center">
    <div style="background: #1890ff;">项目1</div>
    <div style="background: #52c41a;">项目2</div>
    <div style="background: #faad14;">项目3</div>
    <div style="background: #ff4d4f;">项目4</div>
</wiy-grid>
```

### 子元素独立对齐

```html
<wiy-grid tc="1fr 1fr" tr="100px 100px">
    <div js="start" as="start" style="background: #1890ff;">左上</div>
    <div js="end" as="start" style="background: #52c41a;">右上</div>
    <div js="start" as="end" style="background: #faad14;">左下</div>
    <div js="end" as="end" style="background: #ff4d4f;">右下</div>
</wiy-grid>
```

### 复杂布局

```html
<!-- 经典布局：头部、主体、侧边栏、底部 -->
<wiy-grid tc="200px 1fr" tr="60px 1fr 60px" g="10px" style="height: 400px;">
    <div style="grid-column: 1 / -1; background: #1890ff;">头部</div>
    <div style="background: #52c41a;">侧边栏</div>
    <div style="background: #faad14;">主体</div>
    <div style="grid-column: 1 / -1; background: #722ed1;">底部</div>
</wiy-grid>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| tc | string | - | 列模板（grid-template-columns），如：`1fr 1fr 1fr` |
| tr | string | - | 行模板（grid-template-rows），如：`100px auto 100px` |
| g | string | - | 网格间距（gap），如：`10px`、`10px 20px` |
| cg | string | - | 列间距（column-gap），如：`10px` |
| rg | string | - | 行间距（row-gap），如：`10px` |
| ji | string | - | 网格项水平对齐（justify-items），可选值：`start`、`end`、`center`、`stretch` |
| ai | string | - | 网格项垂直对齐（align-items），可选值：`start`、`end`、`center`、`stretch`、`baseline` |
| jc | string | - | 内容水平对齐（justify-content），可选值：`start`、`end`、`center`、`stretch`、`space-around`、`space-between`、`space-evenly` |
| ac | string | - | 内容垂直对齐（align-content），可选值：`start`、`end`、`center`、`stretch`、`space-around`、`space-between`、`space-evenly` |

### 子元素属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| js | string | - | 子元素自身水平对齐（justify-self），可选值：`start`、`end`、`center`、`stretch` |
| as | string | - | 子元素自身垂直对齐（align-self），可选值：`start`、`end`、`center`、`stretch` |

## 数据 data

本组件无内部响应式数据定义。

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 布局内容插槽，用于插入需要网格布局的子元素 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

本组件直接使用 CSS Grid 属性，无需额外 CSS 变量配置。可通过标准 CSS 样式覆盖组件样式。

## 依赖

无依赖其他组件或第三方库。

## 注意事项

1. 组件默认为网格布局容器（display: grid）
2. 列模板（tc）和行模板（tr）通过 JavaScript 在 mount 生命周期动态设置
3. 间距属性（g、cg、rg）通过 JavaScript 在 mount 生命周期动态设置
4. 子元素的 `js` 和 `as` 属性通过 ::slotted() 选择器实现，需设置在直接子元素上
5. 子元素可通过标准 CSS 属性 `grid-column` 和 `grid-row` 跨列或跨行
6. 完整的 CSS Grid 用法请参考 CSS 标准文档
7. 建议明确设置列模板（tc），否则可能无法达到预期布局效果
