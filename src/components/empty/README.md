# Empty 空状态组件

## 简介

Empty 组件是 wiy-ui 组件库中用于显示空状态的基础组件，适用于数据为空、加载失败、无权限等场景，提供自定义图标和标题。

## 用法

### 基础用法

```html
<wiy-empty></wiy-empty>
```

### 自定义标题

```html
<wiy-empty title="暂无搜索结果"></wiy-empty>
```

### 自定义图标

```html
<wiy-empty icon="search" title="未找到相关内容"></wiy-empty>
<wiy-empty icon="inbox" title="收件箱为空"></wiy-empty>
<wiy-empty icon="frown" title="加载失败"></wiy-empty>
```

### 自定义图标插槽

```html
<wiy-empty title="暂无数据">
    <wiy-icon slot="icon" name="folder-open" style="font-size: 80px;"></wiy-icon>
</wiy-empty>
```

### 完整自定义内容

```html
<wiy-empty>
    <wiy-icon slot="icon" name="meh-rolling-eyes" theme="warning"></wiy-icon>
    <div id="title">暂无数据</div>
    <div style="margin-top: 10px;">
        <wiy-button theme="primary">刷新</wiy-button>
    </div>
</wiy-empty>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | '暂无数据' | 空状态标题文本 |
| icon | string | 'envelope-open-text' | 图标名称 |

## 数据 data

本组件无内部响应式数据定义。

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| icon | 默认图标 | 图标插槽，用于自定义空状态图标 |
| default | 无 | 默认插槽，用于插入自定义内容（可覆盖整个空状态） |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Empty 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-empty-icon-color: #d9d9d9;
    --wiy-empty-title-color: #999;
}

wiy-empty {
    /* 自定义间距 */
    padding: 40px 20px;

    /* 自定义尺寸 */
    min-height: 200px;
}

/* 自定义图标大小 */
wiy-empty wiy-icon {
    font-size: 80px;
}

/* 自定义标题样式 */
wiy-empty #title {
    font-size: 16px;
    margin-top: 16px;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示空状态图标 |

## 注意事项

1. 组件默认显示 "暂无数据" 标题和信封图标
2. 可以通过 title 属性自定义标题文本
3. 可以通过 icon 属性自定义图标名称
4. 可以通过 icon 插槽完全自定义图标（包括大小、颜色等）
5. 可以通过默认插槽完全自定义整个空状态的内容
6. 组件会垂直居中显示内容
7. 图标颜色和标题颜色可通过 CSS 变量自定义
8. 适用于列表为空、搜索无结果、页面无权限等多种场景
9. 默认图标基于 Font Awesome，使用前确保已引入对应的图标库
