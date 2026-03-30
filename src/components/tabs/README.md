# Tabs 标签页组件

## 简介

Tabs 组件是 wiy-ui 组件库中用于创建标签页导航的组件，支持顶部和左侧两种布局方式，可用于多内容区域的切换展示。

## 用法

### 基础用法

```html
<wiy-tabs wiy:data-items="this.tabItems">
    <div slot="content-0">标签页 1 的内容</div>
    <div slot="content-1">标签页 2 的内容</div>
    <div slot="content-2">标签页 3 的内容</div>
</wiy-tabs>
```

```javascript
export default {
    data: {
        tabItems: ['标签页 1', '标签页 2', '标签页 3'],
    },
};
```

### 左侧布局

```html
<wiy-tabs position="left" wiy:data-items="this.tabItems">
    <div slot="content-0">左侧布局标签页 1 内容</div>
    <div slot="content-1">左侧布局标签页 2 内容</div>
</wiy-tabs>
```

```javascript
export default {
    data: {
        tabItems: ['菜单 1', '菜单 2'],
    },
};
```

### 默认激活指定标签

```html
<wiy-tabs
    wiy:data-items="this.tabItems"
    wiy:data-active="1">
    <div slot="content-0">第一个标签页</div>
    <div slot="content-1">默认激活此标签页</div>
    <div slot="content-2">第三个标签页</div>
</wiy-tabs>
```

### 动态切换标签

```html
<wiy-tabs
    wiy:data-items="this.tabItems"
    wiy:data-active="this.currentTab">
    <div slot="content-0">内容 1</div>
    <div slot="content-1">内容 2</div>
</wiy-tabs>
<wiy-button wiy:onclick="this.switchTab">切换到第二个标签</wiy-button>
```

```javascript
export default {
    data: {
        tabItems: ['标签 1', '标签 2'],
        currentTab: 0,
    },
    methods: {
        switchTab() {
            this.currentTab = 1;
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | array | [] | 标签页标题数组（支持 Data 绑定） |
| active | number | 0 | 当前激活的标签页索引（支持 Data 绑定） |
| position | string | - | 标签页位置，可选值：`left`（左侧布局） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | array | [] | 标签页标题数组（支持 Data 绑定） |
| active | number | 0 | 当前激活的标签页索引（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| content-{index} | 无 | 标签页内容插槽，index 为标签页索引（从 0 开始） |

### 插槽使用示例

```html
<wiy-tabs wiy:data-items="['详情', '设置']">
    <div slot="content-0">
        <h3>详情信息</h3>
        <p>这是详情标签页的内容</p>
    </div>
    <div slot="content-1">
        <h3>设置选项</h3>
        <wiy-input placeholder="输入设置"></wiy-input>
    </div>
</wiy-tabs>
```

## 事件 event

本组件未直接暴露事件，可通过监听 active 数据变化来响应标签切换。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| onItemClick | item, index | void | 点击标签页时调用，切换激活状态 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Tabs 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 激活状态标签文字颜色 */
    --wiy-tabs-tab-text-color-active: #1890ff;

    /* 悬停状态标签文字颜色 */
    --wiy-tabs-tab-text-color-hover: #40a9ff;

    /* 悬停状态标签背景颜色 */
    --wiy-tabs-tab-color-hover: #f0f0f0;

    /* 左侧布局激活标签标记颜色 */
    --wiy-tabs-tab-marker-color: #1890ff;
}
```

## 依赖

本组件不依赖其他组件。

## 注意事项

1. items 数组中的元素会按顺序显示为标签页标题
2. content-{index} 插槽的索引必须与 items 数组的索引对应
3. position="left" 时，标签页显示在左侧，内容显示在右侧
4. active 属性支持双向绑定，可以通过修改该值来切换标签页
5. 标签页过多时会自动支持横向滚动（顶部布局）或纵向滚动（左侧布局）
6. 点击标签页时会自动更新 active 的值
