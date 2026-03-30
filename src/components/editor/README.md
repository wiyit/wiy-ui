# Editor 富文本编辑器组件

## 简介

Editor 组件是 wiy-ui 组件库中用于富文本编辑的组件，基于 TinyMCE 实现，提供强大的文本编辑功能，支持图片、表格、列表等多种内容格式。

## 用法

### 基础用法

```html
<wiy-editor></wiy-editor>
```

### 设置初始内容

```html
<wiy-editor content="<p>这是初始内容</p>"></wiy-editor>
```

### Data 绑定

```html
<wiy-editor wiy:data-content="this.htmlContent" wiy:onchange="this.onContentChange"></wiy-editor>
```

```javascript
export default {
    data: {
        htmlContent: '<p>初始内容</p>',
    },
    methods: {
        onContentChange(e) {
            console.log('内容已变更:', e.content);
        }
    }
};
```

### 自定义配置

```html
<wiy-editor wiy:data-options="this.editorOptions"></wiy-editor>
```

```javascript
export default {
    data: {
        editorOptions: {
            plugins: ['link', 'image', 'lists', 'table'],
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | bullist numlist',
            height: 400,
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| content | string | '' | 编辑器内容（支持 Data 绑定） |
| options | object | {} | TinyMCE 配置选项 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| content | string | '' | 编辑器内容内部数据（支持 Data 绑定） |
| options | object | {} | TinyMCE 配置选项 |
| editor | object | undefined | TinyMCE 编辑器实例（只读） |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 编辑器内容变化时 | { content: string } | 内容变化事件 |
| datainit | 数据初始化时 | { content: string } | 数据初始化事件 |

### 事件监听示例

```html
<wiy-editor wiy:onchange="this.onEditorChange"></wiy-editor>
```

```javascript
export default {
    methods: {
        onEditorChange(e) {
            console.log('编辑器内容:', e.content);
        }
    }
};
```

## 实例函数 method

本组件未提供公开实例函数，但可通过 `editor` 属性访问 TinyMCE 原生实例。

### 使用 TinyMCE 原生实例

```javascript
const editorComp = this.getElement('myEditor');
const tinymceEditor = editorComp.editor;

// 使用 TinyMCE API
tinymceEditor.setContent('<p>新内容</p>');
const content = tinymceEditor.getContent();
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Editor 组件支持通过 TinyMCE 配置选项调整样式：

```css
wiy-editor {
    width: 100%;
    height: 500px;
}
```

通过 options 配置编辑器样式：

```javascript
this.editorOptions = {
    height: 400,
    content_style: 'body { font-family: Arial; font-size: 14px; }',
};
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 第三方库 | tinymce | TinyMCE 富文本编辑器核心库 |

## 注意事项

1. 组件基于 TinyMCE 构建，支持完整的富文本编辑功能
2. 默认集成了 wordcount、link、autolink、image、media、lists、preview、table 等插件
3. 默认语言为中文（zh-CN）
4. content 属性支持数据双向绑定
5. options 可以覆盖所有 TinyMCE 原生配置项
6. 编辑器支持双向调整大小
7. 组件卸载时会自动销毁编辑器实例，释放资源
8. 通过 editor 属性可以访问 TinyMCE 原生实例，调用其 API
9. 如需使用更多插件，需要在 options 中配置 plugins 选项
