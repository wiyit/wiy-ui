# File Picker 文件选择组件

## 简介

File Picker 组件是 wiy-ui 组件库中用于文件选择的表单组件，支持单文件、多文件和目录选择，提供文件列表展示和删除功能。

## 用法

### 基础用法

```html
<wiy-file-picker></wiy-file-picker>
```

### 单文件选择

```html
<wiy-file-picker multiple="false">选择单个文件</wiy-file-picker>
```

### 目录选择

```html
<wiy-file-picker directory>选择目录</wiy-file-picker>
```

### 带提示信息

```html
<!-- 纯文本提示 -->
<wiy-file-picker tips="支持选择图片或文档文件"></wiy-file-picker>

<!-- HTML格式提示 -->
<wiy-file-picker tips="支持选择 <strong>图片</strong> 或 <em>文档</em> 文件" tips-is-html></wiy-file-picker>
```

### Data 绑定

```html
<wiy-file-picker wiy:data-files="this.selectedFiles" wiy:onchange="this.handleFileChange"></wiy-file-picker>
```

```javascript
export default {
    data: {
        selectedFiles: [],
    },
    methods: {
        handleFileChange(e) {
            console.log('已选择的文件:', e.detail.files);
        },
    },
};
```

### 文件状态管理

```html
<wiy-file-picker wiy:data-files="this.files"></wiy-file-picker>
```

```javascript
export default {
    data: {
        files: [],
    },
    methods: {
        addFilesWithStatus() {
            // 添加文件并设置状态
            this.files.push({
                name: 'example.txt',
                size: 1024,
                status: 'uploading', // uploading | success | error
            });
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| multiple | boolean | true | 是否支持选择多个文件 |
| directory | boolean | false | 是否选择目录（而非文件） |
| tips | string | - | 提示信息文本 |
| tips-is-html | boolean | false | 提示信息是否为 HTML 格式 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| files | array | [] | 已选择的文件列表（支持 Data 绑定） |
| tips | string | undefined | 提示信息内部数据 |
| tipsIsHtml | boolean | false | 提示信息是否为 HTML 格式内部数据 |
| directory | boolean | false | 目录选择模式内部数据 |
| multiple | boolean | true | 多文件选择内部数据 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 文件选择变化时 | { files: array } | 文件列表变化事件 |
| fileclick | 点击文件名时 | { file: object } | 文件点击事件 |
| datainit | 组件初始化时 | { files: array } | 数据初始化事件 |

### 事件监听示例

```html
<wiy-file-picker
    wiy:onchange="this.handleChange"
    wiy:onfileclick="this.handleFileClick">
</wiy-file-picker>
```

```javascript
export default {
    methods: {
        handleChange(e) {
            console.log('文件列表变化:', e.detail.files);
        },
        handleFileClick(e) {
            console.log('点击文件:', e.detail.file);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

File Picker 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-file-picker-file-name-color: #333;
    --wiy-file-picker-file-name-color-hover: #1890ff;
    --wiy-file-picker-tips-color: #666;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-button | 用于显示选择按钮 |
| 组件 | wiy-icon | 用于显示文件状态图标和删除图标 |
| 组件 | wiy-flex | 用于布局文件列表 |
| 组件 | wiy-pre | 用于显示纯文本提示信息 |

## 注意事项

1. 目录选择（directory）功能依赖浏览器支持，部分浏览器可能不兼容
2. 文件对象包含 name、path、size、type 属性和 getFile() 方法获取原始 File 对象
3. 文件状态支持：uploading（上传中）、success（成功）、error（错误）
4. 删除按钮仅在鼠标悬停文件名时显示
5. 选择新文件会追加到现有文件列表中，不会覆盖
6. tips-is-html 为 true 时需确保 tips 内容安全，防止 XSS 攻击
