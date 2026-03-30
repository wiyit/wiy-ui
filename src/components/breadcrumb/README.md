# Breadcrumb 面包屑组件

## 简介

Breadcrumb 组件是 wiy-ui 组件库中的导航组件，用于显示用户当前所在页面的路径，支持快速返回上级页面，提升用户体验。

## 用法

### 基础用法

```html
<wiy-breadcrumb wiy:data-items="this.breadcrumbItems"></wiy-breadcrumb>
```

```javascript
export default {
    data: {
        breadcrumbItems: [
            { name: '首页', onclick: (breadcrumb, item) => console.log('点击首页') },
            { name: '产品列表', onclick: (breadcrumb, item) => console.log('点击产品列表') },
            { name: '产品详情', onclick: (breadcrumb, item) => console.log('点击产品详情') },
        ],
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | Array | [] | 面包屑数据数组，每个项包含 `name`（显示名称）和 `onclick`（点击事件）属性 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| onItemClick | item | 无 | 点击面包屑项时触发的内部函数，会调用 item.onclick 方法 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Breadcrumb 组件使用以下默认样式：

```css
:host {
    display: flex;
}

.item {
    display: flex;
    align-items: center;
}

.item:not(:first-of-type)::before {
    content: '/';
    color: gray;
}

.name {
    padding: 0 4px;
    user-select: none;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-link | 用于创建可点击的面包屑项 |

## 注意事项

1. 面包屑数据 `items` 必须是数组类型，每个项必须包含 `name` 属性
2. 点击事件 `onclick` 是可选的，若不提供则面包屑项不可点击
3. 面包屑项之间会自动添加分隔符 "/"
4. 支持通过 Data 绑定动态更新面包屑数据
