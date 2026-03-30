# Radio 单选框组件

## 简介

Radio 组件是 wiy-ui 组件库中的基础表单组件，用于实现单选功能，允许用户从一组选项中选择一个答案。

## 用法

### 基础用法

```html
<wiy-radio label="选项1"></wiy-radio>
```

### 选中状态

```html
<!-- 初始选中 -->
<wiy-radio label="选项1" checked></wiy-radio>

<!-- 动态绑定选中状态 -->
<wiy-radio label="选项1" wiy:data-checked="this.selected"></wiy-radio>
```

```javascript
export default {
    data: {
        selected: true,
    },
};
```

### 禁用状态

```html
<!-- 禁用选项 -->
<wiy-radio label="禁用选项" disabled></wiy-radio>

<!-- 动态禁用 -->
<wiy-radio label="动态禁用" wiy:attr-disabled="this.isDisabled"></wiy-radio>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| label | string | - | 单选框标签文本 |
| disabled | boolean | false | 是否禁用单选框 |
| checked | boolean | false | 是否选中（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| checked | boolean | false | 选中状态内部数据（支持 Data 绑定） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中状态变化时 | { checked: boolean } | 选中状态改变事件 |
| datainit | 组件初始化时 | { checked: boolean } | 组件初始化完成事件 |

### 事件监听示例

```html
<wiy-radio label="选项" wiy:onchange="this.handleChange"></wiy-radio>
```

```javascript
export default {
    methods: {
        handleChange(event) {
            console.log('选中状态:', event.checked);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Radio 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 可根据需要添加自定义样式变量 */
}
```

## 依赖

本组件无外部依赖。

## 注意事项

1. 单选框通常与 radio-group 组件配合使用，实现完整的单选功能
2. `checked` 属性支持 Data 绑定，可实现动态选中状态
3. 禁用状态会影响用户交互，但不会影响数据绑定
4. 组件会在初始化时触发 `datainit` 事件，可用于获取初始状态
