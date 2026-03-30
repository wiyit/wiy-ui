# Pre 预格式化文本组件

## 简介

Pre 组件是 wiy-ui 组件库中用于显示预格式化文本的组件，基于 HTML `pre` 元素封装，支持保留空格和换行，支持自动换行和不换行两种模式，适用于代码展示、日志输出、多行文本展示等场景。

## 用法

### 基础用法

```html
<!-- 使用 text 属性
<wiy-pre text="这是一段预格式化文本
    这里保留了缩进
    这里也保留了换行"></wiy-pre>
```

### 使用数据绑定

```html
<wiy-pre wiy:data-text="this.preText"></wiy-pre>
```

```javascript
export default {
    data: {
        preText: `这是一段预格式化文本
    这里保留了缩进
    这里也保留了换行`
    }
};
```

### 不换行模式

```html
<wiy-pre nowrap text="这是一段很长很长很长很长很长很长很长很长很长很长的文本，不会自动换行，会在一行显示"></wiy-pre>
```

### 显示代码

```html
<wiy-pre text="function hello() {
    console.log('Hello, world!');
    return true;
}"></wiy-pre>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | - | 预格式化文本内容（支持 Data 绑定） |
| nowrap | boolean | false | 是否不自动换行（纯 CSS 属性，存在即生效） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | undefined | 预格式化文本内容（支持 Data 绑定） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Pre 组件支持通过 CSS 自定义样式：

```css
wiy-pre {
    /* 自定义字体 */
    font-family: monospace;
    font-size: 14px;
    line-height: 1.6;

    /* 自定义颜色 */
    color: #333;
    background-color: #f5f5f5;

    /* 自定义内边距 */
    padding: 12px;
}
```

## 依赖

本组件不依赖其他组件。

## 注意事项

1. `text 属性优先级：data > text
2. 组件默认使用 `white-space: pre-wrap`，会保留空格和换行，但会自动换行
2. 设置 nowrap 属性后使用 `white-space: pre`，会保留空格和换行，但不会自动换行
3. 文本内容中会原样保留空格和换行符
4. 组件支持多行文本显示，适合展示代码、日志等内容
