# Textarea 多行输入框组件

## 简介

Textarea 组件是 wiy-ui 组件库中用于多行文本输入的组件，支持文本输入、事件监听和数据绑定，适用于长文本内容的输入场景。

## 用法

### 基础用法

```html
<wiy-textarea placeholder="请输入内容"></wiy-textarea>
```

### 数据绑定

```html
<wiy-textarea
    wiy:data-text="this.content"
    placeholder="请输入内容">
</wiy-textarea>
```

```javascript
export default {
    data: {
        content: '初始文本内容',
    },
};
```

### 监听变化事件

```html
<wiy-textarea
    wiy:data-text="this.content"
    wiy:onchange="this.handleChange"
    wiy:ontextchange="this.handleTextChange"
    placeholder="请输入内容">
</wiy-textarea>
```

```javascript
export default {
    data: {
        content: '',
    },
    methods: {
        handleChange(e) {
            console.log('值变化（失去焦点时触发）', e.data.text);
        },
        handleTextChange(e) {
            console.log('文本变化（输入时触发）', e.data.text);
        },
    },
};
```

### 获取值

```html
<wiy-textarea id="myTextarea" placeholder="请输入内容"></wiy-textarea>
<wiy-button wiy:onclick="this.getValue">获取值</wiy-button>
```

```javascript
export default {
    methods: {
        getValue() {
            const textarea = this.getElement('myTextarea');
            const value = textarea.getValue();
            console.log('输入框的值:', value);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | '' | 输入框文本内容（支持 Data 绑定） |
| placeholder | string | - | 输入框占位提示文本 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | '' | 输入框文本内容（支持 Data 绑定） |

## 插槽 slot

本组件不支持插槽。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| datainit | 组件初始化时 | { text } | 数据初始化事件 |
| change | 输入框失去焦点且值变化时 | { text } | 值变化事件 |
| textchange | 输入时文本变化时 | { text } | 文本变化事件（支持中文输入法） |

### 事件监听示例

```html
<wiy-textarea
    wiy:data-text="this.content"
    wiy:ondatainit="this.onDataInit"
    wiy:onchange="this.onChange"
    wiy:ontextchange="this.onTextChange"
    placeholder="请输入内容">
</wiy-textarea>
```

```javascript
export default {
    data: {
        content: '',
    },
    methods: {
        onDataInit(e) {
            console.log('初始化数据', e.data.text);
        },
        onChange(e) {
            console.log('值已改变', e.data.text);
        },
        onTextChange(e) {
            console.log('文本正在改变', e.data.text);
        },
    },
};
```

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getValue | - | string | 获取输入框当前值 |

### 实例函数使用示例

```javascript
// 在组件中获取 textarea 实例
const textareaComp = this.getElement('myTextarea');
// 获取当前值
const value = textareaComp.getValue();
console.log('当前值:', value);
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Textarea 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 输入框背景颜色 */
    --wiy-textarea-color: #ffffff;

    /* 边框颜色 */
    --wiy-textarea-border-color: #d9d9d9;

    /* 悬停状态边框颜色 */
    --wiy-textarea-border-color-hover: #40a9ff;

    /* 聚焦状态边框颜色 */
    --wiy-textarea-border-color-focus: #40a9ff;

    /* 聚焦状态阴影 */
    --wiy-textarea-focus-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
```

## 依赖

本组件不依赖其他组件。

## 注意事项

1. text 数据支持双向绑定，修改 text 会更新输入框内容
2. change 事件在输入框失去焦点且值发生变化时触发
3. textchange 事件在每次输入时触发，支持中文输入法（compositionend）
4. 可以通过 getValue() 方法获取输入框当前值
5. 组件高度会默认填充父容器，可通过 CSS 控制
6. placeholder 仅作为提示文本，不会作为值的一部分
7. textchange 事件在输入法组合过程中不会触发，组合结束后才会触发
