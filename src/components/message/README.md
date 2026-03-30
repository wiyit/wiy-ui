# Message 消息组件

## 简介

Message 组件是 wiy-ui 组件库中用于显示全局消息提示的组件，支持多种主题样式、自动关闭、手动关闭和静态定位。通过全局函数 `showMessage` 调用，提供简洁的消息反馈。

## 用法

### 基础用法（全局函数）

```javascript
// 在组件或应用中调用
this.getApp().showMessage({
    content: '这是一条消息提示',
    theme: 'info',
    duration: 3000,
    position: 'top',
    closable: true
});
```

### 直接使用组件

```html
<wiy-message theme="success" duration="3000" position="top" closable>
    操作成功！
</wiy-message>
```

### 支持的主题

```javascript
// 信息提示（默认）
this.getApp().showMessage({
    content: '这是一条信息提示',
    theme: 'info'
});

// 成功提示
this.getApp().showMessage({
    content: '操作成功！',
    theme: 'success'
});

// 警告提示
this.getApp().showMessage({
    content: '请注意，这是一条警告',
    theme: 'warning'
});

// 错误提示
this.getApp().showMessage({
    content: '操作失败，请重试',
    theme: 'error'
});

// 加载状态
this.getApp().showMessage({
    content: '正在加载中...',
    theme: 'loading',
    duration: -1 // 不自动关闭
});
```

### 不同位置

```javascript
// 顶部居中（默认）
this.getApp().showMessage({
    content: '顶部居中消息',
    position: 'top'
});

// 右上角
this.getApp().showMessage({
    content: '右上角消息',
    position: 'right-top'
});

// 静态定位（不自动定位到页面层）
this.getApp().showMessage({
    content: '静态定位消息',
    position: 'static'
});
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| theme | string | 'info' | 消息主题，可选值：`info`、`success`、`warning`、`error`、`question`、`loading` |
| duration | number | 3000 | 自动关闭时间（毫秒），-1 表示不自动关闭 |
| position | string | 'static' | 消息位置，可选值：`static`、`top`、`right-top` |
| closable | boolean | false | 是否显示关闭按钮 |
| visible | boolean | false | 消息可见性（内部属性） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| visible | boolean | false | 消息可见性（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 消息内容插槽 |

## 事件 event

本组件无单独事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getIcon() | 无 | string | 根据主题获取对应的图标名称 |

## 全局函数 global method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| showMessage(options) | options: 配置对象 | 无 | 显示消息提示 |

### showMessage 配置项

```javascript
showMessage({
    content: '消息内容', // 消息文本内容（必填）
    theme: 'info', // 消息主题（可选）
    duration: 3000, // 自动关闭时间（可选）
    position: 'top', // 显示位置（可选）
    closable: false // 是否显示关闭按钮（可选）
})
```

## 样式 style

Message 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 边框颜色 */
    --wiy-message-border-color: #e0e0e0;

    /* 文本颜色 */
    --wiy-message-text-color: #333;

    /* 关闭按钮颜色 */
    --wiy-message-close-color: #999;

    /* 图标颜色 */
    --wiy-message-icon-color-info: #1890ff;
    --wiy-message-icon-color-success: #52c41a;
    --wiy-message-icon-color-warning: #faad14;
    --wiy-message-icon-color-error: #ff4d4f;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示消息图标和关闭按钮 |

## 注意事项

1. `showMessage` 函数会自动创建并管理 message 组件实例
2. 消息组件会在显示后自动添加到页面层，不需要手动插入 DOM
3. 设置 `duration: -1` 会使消息一直显示，直到用户手动关闭或调用 `visible = false`
4. 当浏览器不支持 popover API 时，会自动降级使用 dialog 组件显示消息
5. 消息组件支持 HTML 内容，但需要注意 XSS 安全问题
