# Frame 框架组件

## 简介

Frame 组件是 wiy-ui 组件库中用于嵌入 iframe 的基础组件，支持跨域通信和自动高度调整。

## 用法

### 基础用法

```html
<wiy-frame src="https://example.com"></wiy-frame>
```

### 块级显示

```html
<wiy-frame src="https://example.com" block></wiy-frame>
```

### 权限设置

```html
<wiy-frame src="https://example.com" allow="fullscreen; geolocation"></wiy-frame>
```

### Data 绑定

```html
<wiy-frame wiy:data-src="this.frameSrc"></wiy-frame>
```

```javascript
export default {
    data: {
        frameSrc: 'https://example.com',
    },
    methods: {
        changeFrameUrl() {
            this.frameSrc = 'https://example.org';
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | - | iframe 源地址（支持 Data 绑定） |
| allow | string | - | iframe 允许的权限 |
| block | boolean | false | 是否块级显示 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | undefined | iframe 源地址内部数据 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| load | iframe 加载完成时 | - | iframe 加载完成事件 |
| message | 收到 iframe 消息时 | data | 接收 iframe 发送的消息 |

### load 事件示例

```html
<wiy-frame wiy:onload="this.handleLoad"></wiy-frame>
```

```javascript
export default {
    methods: {
        handleLoad() {
            console.log('iframe 加载完成');
        }
    }
};
```

### message 事件示例

```html
<wiy-frame wiy:onmessage="this.handleMessage"></wiy-frame>
```

```javascript
export default {
    methods: {
        handleMessage(data) {
            console.log('收到 iframe 消息:', data);

            // 处理消息
            if (data.type === 'resize') {
                console.log('iframe 高度调整为:', data.height);
            } else if (data.type === 'action') {
                console.log('iframe 操作:', data.action);
            }
        }
    }
};
```

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| postMessage(data) | data: object | 无 | 向 iframe 发送消息 |

### postMessage() 示例

```javascript
const frame = this.getElement('myFrame');
frame.postMessage({
    type: 'message',
    content: 'Hello from parent',
    timestamp: Date.now(),
});
```

## 全局函数 global method

本组件未注册全局函数。

## 跨域通信

### 子页面向父页面发送消息

在 iframe 内部页面中：

```javascript
// 发送简单消息
window.parent.postMessage({
    'wiy-frame': {
        type: 'message',
        content: 'Hello from iframe',
    }
}, '*');

// 发送高度调整消息（自动高度）
window.parent.postMessage({
    'wiy-frame': {
        type: 'resize',
        height: document.body.scrollHeight,
    }
}, '*');
```

### 父页面向子页面发送消息

```javascript
const frame = this.getElement('myFrame');
frame.postMessage({
    type: 'command',
    action: 'refresh',
});
```

## 样式 style

Frame 组件支持通过 CSS 调整样式：

```css
wiy-frame {
    width: 100%;
    height: 600px; /* 设置默认高度 */
    border: 1px solid #ddd;
    border-radius: 4px;
}
```

## 依赖

无依赖其他组件或第三方库。

## 注意事项

1. 跨域通信需要使用 `wiy-frame` 格式的消息
2. 自动高度调整需要子页面配合发送 resize 消息
3. 支持 iframe 的所有标准属性和事件
4. src 属性支持数据绑定和动态更新
5. block 属性设置后，组件将以块级元素显示
