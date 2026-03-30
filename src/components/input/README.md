# Input 输入框组件

## 简介

Input 组件是 wiy-ui 组件库中最基础的表单组件，用于收集用户输入，支持多种输入类型和状态，包括密码输入、图标显示等功能。

## 用法

### 基础用法

```html
<wiy-input placeholder="请输入内容"></wiy-input>
```

### 输入类型

```html
<!-- 文本输入（默认） -->
<wiy-input type="text" placeholder="文本输入"></wiy-input>

<!-- 密码输入 -->
<wiy-input type="password" placeholder="密码输入"></wiy-input>

<!-- 数字输入 -->
<wiy-input type="number" placeholder="数字输入"></wiy-input>
```

### 带图标

```html
<!-- 左侧图标 -->
<wiy-input icon="search" placeholder="搜索"></wiy-input>

<!-- 自定义图标插槽 -->
<wiy-input placeholder="带图标">
    <template slot="icon">
        <wiy-icon name="user"></wiy-icon>
    </template>
</wiy-input>
```

### Data 绑定

```html
<wiy-input wiy:data-text="this.inputText" placeholder="双向绑定"></wiy-input>
```

```javascript
export default {
    data: {
        inputText: '',
    },
    methods: {
        handleTextChange({ text }) {
            console.log('输入内容:', text);
        },
    },
};
```

### 事件监听

```html
<wiy-input wiy:onchange="this.handleChange" wiy:ontextchange="this.handleTextChange"></wiy-input>
```

```javascript
export default {
    methods: {
        handleChange({ text }, e) {
            console.log('输入框失去焦点，内容:', text);
        },
        handleTextChange({ text }, e) {
            console.log('内容变化:', text);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| type | string | 'text' | 输入框类型，可选值：`text`、`password`、`number` |
| placeholder | string | - | 占位符文本 |
| icon | string | - | 左侧图标名称 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | '' | 输入框文本内容（支持 Data 绑定） |
| showPassword | boolean | false | 密码显示/隐藏状态 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| icon | - | 左侧图标插槽，用于自定义图标 |
| default | 无 | 输入框内容插槽（不建议使用） |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| datainit | 组件初始化时 | { text: 初始文本 } | 初始化事件 |
| change | 输入框失去焦点时 | { text: 当前文本 } | 内容变更事件 |
| textchange | 输入框内容变化时 | { text: 当前文本 } | 实时内容变化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getValue() | 无 | string | 获取输入框当前值 |

### getValue() 示例

```javascript
const input = this.getElement('myInput');
const value = input.getValue();
console.log('当前值:', value);
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Input 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-input-border-color: #d9d9d9;
    --wiy-input-border-color-hover: #c0c0c0;
    --wiy-input-border-color-focus: #1890ff;
    --wiy-input-color: #fff;
    --wiy-input-focus-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示图标 |

## 注意事项

1. 输入框支持多种输入类型，但建议根据实际需求选择
2. 密码输入框支持显示/隐藏功能，点击右侧眼睛图标切换
3. 数字输入框会隐藏浏览器默认的上下箭头
4. 输入内容会自动进行响应式处理
5. 支持中文输入法的 composing 状态

## 浏览器兼容性

- 支持所有现代浏览器
- 对于 IE11，建议使用 polyfill 支持
