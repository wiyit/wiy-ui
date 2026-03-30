# BackTop 回到顶部组件

## 简介

BackTop 组件是 wiy-ui 组件库中用于快速回到页面顶部的交互组件，当页面滚动超过指定高度时自动显示，支持平滑滚动和自定义样式。

## 用法

### 基础用法

```html
<wiy-back-top></wiy-back-top>
```

### 自定义图标

```html
<!-- 使用自定义图标 -->
<wiy-back-top icon="arrow-up"></wiy-back-top>

<!-- 使用不同图标前缀 -->
<wiy-back-top icon="chevron-up" icon-prefix="fas"></wiy-back-top>
```

### 带文字说明

```html
<wiy-back-top title="顶部"></wiy-back-top>
```

### 自定义显示高度

```html
<!-- 滚动到200px时显示 -->
<wiy-back-top show-height="200"></wiy-back-top>
```

### 自定义滚动时间

```html
<!-- 滚动动画时长为500ms -->
<wiy-back-top duration="500"></wiy-back-top>
```

### Data 绑定

```html
<wiy-back-top
    wiy:data-icon="this.backTopIcon"
    wiy:data-title="this.backTopTitle">
</wiy-back-top>
```

```javascript
export default {
    data: {
        backTopIcon: 'arrow-up',
        backTopTitle: '返回',
    },
    methods: {
        updateIcon() {
            this.backTopIcon = 'chevron-up';
            this.backTopTitle = '顶部';
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| icon | string | 'angles-up' | 图标名称 |
| icon-prefix | string | - | 图标前缀，用于指定图标库（如：fas、far、fab） |
| title | string | - | 文字说明 |
| show-height | number | 400 | 滚动多少距离时显示组件 |
| duration | number | 200 | 滚动动画时长（毫秒） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| show | boolean | false | 控制组件是否显示的内部状态 |
| container | object | window | 滚动容器 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

本组件无事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| backTop() | 无 | 无 | 执行回到顶部操作 |

### backTop() 示例

```javascript
const backTop = this.getElement('myBackTop');
backTop.backTop();
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

BackTop 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-back-top-border-color: #e8e8e8;
    --wiy-back-top-color-hover: #f5f5f5;
    --wiy-back-top-icon-color: #666;
    --wiy-back-top-title-color: #666;
}

wiy-back-top {
    width: 60px;
    height: 60px;
    right: 40px;
    bottom: 40px;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示图标 |

## 注意事项

1. 默认监听 window 滚动事件，可通过 data.container 自定义滚动容器
2. show-height 必须是正数，否则不显示
3. duration 建议设置在 100-1000 毫秒之间，过长或过短都可能影响用户体验
4. 组件使用绝对定位，需要确保父容器的定位方式合适
5. 图标需要引入对应的图标库（如 Font Awesome）
