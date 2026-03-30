# Code 代码编辑器组件

## 简介

Code 组件是 wiy-ui 组件库中用于代码展示和编辑的组件，基于 CodeMirror 6 实现，支持多种编程语言语法高亮和代码编辑功能。

## 用法

### 基础用法

```html
<wiy-code code="console.log('Hello World');"></wiy-code>
```

### 指定语言

```html
<wiy-code code="const x = 1;" lang="javascript"></wiy-code>
<wiy-code code="<div>Hello</div>" lang="html"></wiy-code>
<wiy-code code="def func(): pass" lang="python"></wiy-code>
```

### 可编辑模式

```html
<wiy-code code="// 可编辑代码" editable lang="javascript"></wiy-code>
```

### Data 绑定

```html
<wiy-code wiy:data-code="this.codeContent" lang="javascript"></wiy-code>
```

```javascript
export default {
    data: {
        codeContent: 'function hello() {\n    console.log("Hello");\n}',
    },
    methods: {
        updateCode() {
            this.codeContent = '// 代码已更新';
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| code | string | '' | 代码内容（支持 Data 绑定） |
| lang | string | - | 编程语言类型，如 javascript、html、css、python 等 |
| editable | boolean | false | 是否可编辑 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| code | string | '' | 代码内容内部数据（支持 Data 绑定） |
| theme | object | undefined | CodeMirror 主题配置 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Code 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-code-color: #f5f5f5;
    --wiy-code-border-color: #d9d9d9;
    --wiy-code-border-color-hover: #40a9ff;
    --wiy-code-border-color-focus: #1890ff;
    --wiy-code-focus-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

wiy-code {
    height: 300px; /* 设置编辑器高度 */
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 第三方库 | @codemirror/state | CodeMirror 状态管理 |
| 第三方库 | @codemirror/view | CodeMirror 视图层 |
| 第三方库 | @codemirror/commands | CodeMirror 命令 |
| 第三方库 | @codemirror/language-data | CodeMirror 语言数据 |
| 第三方库 | @codemirror/language | CodeMirror 语言支持 |
| 第三方库 | @codemirror/lang-markdown | CodeMirror Markdown 支持 |
| 第三方库 | codemirror | CodeMirror 核心库 |

## 注意事项

1. 组件基于 CodeMirror 6 构建，支持多种编程语言语法高亮
2. editable 属性设置为 true 时，代码可编辑
3. lang 属性支持常见编程语言，如 javascript、html、css、python、java 等
4. 只读模式下会显示行号和代码折叠功能
5. 编辑模式下支持 Tab 键缩进等常用编辑功能
6. Markdown 语言支持嵌套代码块高亮
7. code 属性支持数据绑定和动态更新
