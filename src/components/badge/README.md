# Badge 徽章组件

## 简介

Badge 组件是 wiy-ui 组件库中用于显示数字或状态标记的组件，常用于通知、消息等场景的未读计数展示。

## 用法

### 基础用法

```html
<wiy-badge value="5">
    <wiy-button>消息</wiy-button>
</wiy-badge>
```

### 红点模式

```html
<wiy-badge dot>
    <wiy-button>通知</wiy-button>
</wiy-badge>
```

### 最大值限制

```html
<!-- 当value大于100时显示"100+" -->
<wiy-badge value="120" max="100">
    <wiy-button>通知</wiy-button>
</wiy-badge>
```

### Data 绑定

```html
<wiy-badge
    wiy:data-value="this.unreadCount"
    wiy:attr-dot="this.hasNew">
    <wiy-button>消息</wiy-button>
</wiy-badge>
```

```javascript
export default {
    data: {
        unreadCount: 3,
        hasNew: false,
    },
    methods: {
        updateCount() {
            this.unreadCount = 15;
            this.hasNew = true;
        }
    }
};
```

### 无边框按钮

```html
<wiy-badge value="8">
    <wiy-icon name="bell"></wiy-icon>
</wiy-badge>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number/string | - | 显示的数字 |
| max | number | - | 数字最大值，超过显示"{max}+" |
| dot | boolean | false | 是否显示红点 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number | undefined | 内部存储的数值 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 需要附加徽章的内容 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Badge 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-badge-color: #ff4d4f;
    --wiy-badge-text-color: #fff;
}
```

## 依赖

无依赖其他组件或第三方库。

## 注意事项

1. 数值为0或空时不会显示徽章
2. dot属性会优先于value属性显示
3. badge组件会创建独立的层叠上下文，避免与其他元素发生层级冲突
4. 建议放置在相对定位或绝对定位的父容器中
5. 组件不继承字体样式，内部使用固定字体大小
