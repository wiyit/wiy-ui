# Select 下拉选择组件

## 简介

Select 组件是 wiy-ui 组件库中的表单组件，用于实现下拉选择功能，支持自定义选项、提示文本等功能。

## 用法

### 基础用法

```html
<wiy-select wiy:data-options="this.options" wiy:data-data="this.selected"></wiy-select>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
            { label: '选项3', value: '3' },
        ],
        selected: '1',
    },
};
```

### 自定义提示文本

```html
<!-- 默认提示文本为"请选择：" -->
<wiy-select prompt="请选择城市" wiy:data-options="this.cities" wiy:data-data="this.selectedCity"></wiy-select>
```

### 无提示文本

```html
<!-- 隐藏提示选项 -->
<wiy-select no-prompt wiy:data-options="this.options" wiy:data-data="this.selected"></wiy-select>
```

### 禁用选项

```html
<wiy-select wiy:data-options="this.options"></wiy-select>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2', disabled: true },
            { label: '选项3', value: '3' },
        ],
    },
};
```

### 绑定数据

```html
<wiy-select wiy:data-options="this.options" wiy:data-data="this.selected" wiy:onchange="this.handleChange"></wiy-select>
<div>选中值: {{this.selected}}</div>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
        ],
        selected: '1',
    },
    methods: {
        handleChange(event) {
            console.log('选中值:', event.data);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| prompt | string | '请选择：' | 提示文本 |
| no-prompt | boolean | false | 是否隐藏提示选项 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | array | [] | 选项数组（支持 Data 绑定） |
| data | any | undefined | 选中的值（支持 Data 绑定） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中值变化时 | { data: any } | 选中值改变事件 |
| datainit | 组件初始化时 | { data: any } | 组件初始化完成事件 |

### 事件监听示例

```html
<wiy-select wiy:data-options="this.options" wiy:onchange="this.handleChange"></wiy-select>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
        ],
    },
    methods: {
        handleChange(event) {
            console.log('选中值:', event.data);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Select 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-select-border-color: #d0d0d0;
    --wiy-select-border-color-hover: #b0b0b0;
    --wiy-select-border-color-focus: #1890ff;
    --wiy-select-focus-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
```

## 依赖

本组件无外部依赖。

## 注意事项

1. 组件支持选项数组动态更新
2. 禁用的选项不会响应点击事件
3. 组件会在初始化时触发 `datainit` 事件
4. 选择框会根据选项自动调整宽度
5. 支持通过 Data 绑定实现双向数据同步
