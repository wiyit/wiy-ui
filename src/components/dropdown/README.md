# Dropdown 下拉菜单组件

## 简介

Dropdown 组件是 wiy-ui 组件库中用于创建下拉菜单的基础组件，支持自定义触发内容和下拉内容，提供向上/向下展开方向。

## 用法

### 基础用法

```html
<wiy-dropdown>
    点击展开
    <div slot="content">
        <div>选项一</div>
        <div>选项二</div>
        <div>选项三</div>
    </div>
</wiy-dropdown>
```

### 向上展开

```html
<wiy-dropdown content-pos="top">
    向上展开
    <div slot="content">
        <div>选项一</div>
        <div>选项二</div>
    </div>
</wiy-dropdown>
```

### 自定义触发内容

```html
<wiy-dropdown>
    <wiy-button theme="primary">更多操作</wiy-button>
    <div slot="content">
        <wiy-link>编辑</wiy-link>
        <wiy-link>删除</wiy-link>
        <wiy-link>分享</wiy-link>
    </div>
</wiy-dropdown>
```

### Data 绑定控制展开状态

```html
<wiy-dropdown wiy:data-content-show="this.isOpen">
    下拉菜单
    <div slot="content">
        <div>选项一</div>
        <div>选项二</div>
    </div>
</wiy-dropdown>
```

```javascript
export default {
    data: {
        isOpen: false,
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| content-pos | string | 'bottom' | 下拉内容位置，可选值：`bottom`（向下展开）、`top`（向上展开） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| contentShow | boolean | false | 下拉内容是否显示（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 触发区域插槽，用于插入触发下拉的内容 |
| content | 无 | 下拉内容插槽，用于插入下拉菜单内容 |

## 事件 event

本组件无公开事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Dropdown 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-dropdown-color-hover: #f0f0f0;
    --wiy-dropdown-color-opened: #e8e8e8;
}

wiy-dropdown {
    /* 自定义宽度 */
    width: 150px;
}

/* 自定义下拉内容样式 */
wiy-dropdown #content {
    padding: 10px;
    min-width: 200px;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示下拉箭头图标 |

## 注意事项

1. 点击触发区域可以切换下拉菜单的显示/隐藏状态
2. 点击组件外部区域会自动关闭下拉菜单
3. 使用 content-pos="top" 可以让下拉内容向上展开
4. 下拉内容的最小宽度与触发区域宽度一致，最大宽度自适应内容
5. 默认插槽用于放置触发内容，content 插槽用于放置下拉菜单内容
6. 下拉箭头会在菜单展开时自动旋转 180 度
7. 下拉菜单具有平滑的显示/隐藏过渡动画
8. contentShow 数据支持双向绑定，可通过外部控制展开状态
