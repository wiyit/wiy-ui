# Rate 评分组件

## 简介

Rate 组件是 wiy-ui 组件库中的交互组件，用于实现评分功能，支持用户选择评分值，并提供视觉反馈。

## 用法

### 基础用法

```html
<wiy-rate></wiy-rate>
```

### 自定义评分数量

```html
<!-- 默认 5 星，可自定义数量 -->
<wiy-rate max="10"></wiy-rate>
```

### 初始评分

```html
<!-- 初始评分为 3 星 -->
<wiy-rate wiy:data-score="3"></wiy-rate>
```

### 禁用状态

```html
<!-- 禁用评分 -->
<wiy-rate disabled wiy:data-score="3"></wiy-rate>

<!-- 动态禁用 -->
<wiy-rate wiy:attr-disabled="this.isDisabled" wiy:data-score="this.score"></wiy-rate>
```

### 绑定评分数据

```html
<wiy-rate wiy:data-score="this.score" wiy:onchange="this.handleChange"></wiy-rate>
<div>当前评分: {{this.score}}</div>
```

```javascript
export default {
    data: {
        score: 0,
    },
    methods: {
        handleChange(event) {
            console.log('评分:', event.score);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| max | number | 5 | 最大评分数量 |
| disabled | boolean | false | 是否禁用评分 |
| no-info | boolean | false | 是否隐藏评分信息（如"3星"） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| score | number | undefined | 评分值（支持 Data 绑定） |
| showScore | number | undefined | 悬停时显示的评分值（内部使用） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 评分变化时 | { score: number } | 评分改变事件 |
| datainit | 组件初始化时 | { score: number } | 组件初始化完成事件 |

### 事件监听示例

```html
<wiy-rate wiy:onchange="this.handleRateChange"></wiy-rate>
```

```javascript
export default {
    methods: {
        handleRateChange(event) {
            console.log('用户评分:', event.score);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Rate 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 评分图标颜色 */
    --wiy-rate-color: #e0e0e0;
    --wiy-rate-color-hover: #ffc107;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示星标图标 |

## 注意事项

1. 评分值范围为 1 到 max（默认 5）
2. 支持鼠标悬停时显示预览评分
3. 禁用状态下评分组件不可交互
4. 组件会在初始化时触发 `datainit` 事件
