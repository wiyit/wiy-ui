# Dialog 对话框组件

## 简介

Dialog 组件是 wiy-ui 组件库中用于显示模态对话框的组件，支持多种位置配置和自定义内容，提供全局方法 `showDialog` 便捷调用。

## 用法

### 基础用法

```html
<wiy-dialog title="提示">
    这是对话框内容
</wiy-dialog>
```

### 对话框位置

```html
<!-- 居中显示（默认） -->
<wiy-dialog title="居中对话框">内容</wiy-dialog>

<!-- 右侧抽屉 -->
<wiy-dialog title="右侧抽屉" position="right">内容</wiy-dialog>

<!-- 底部抽屉 -->
<wiy-dialog title="底部抽屉" position="bottom">内容</wiy-dialog>
```

### 点击外部关闭

```html
<wiy-dialog title="提示" close-on-click-outside>
    点击外部区域可关闭对话框
</wiy-dialog>
```

### 编程式调用

```html
<wiy-button wiy:onclick="this.openDialog">打开对话框</wiy-button>
```

```javascript
export default {
    methods: {
        async openDialog() {
            const dialog = this.getElement('myDialog');
            const result = await dialog.showModal();
            console.log('对话框关闭，返回结果:', result);
        }
    }
};
```

### 全局函数调用

```javascript
export default {
    methods: {
        async openDialog() {
            const dialog = await this.getApp().showDialog({
                title: '提示',
                content: '这是对话框内容',
                position: 'center',
                closeOnClickOutside: true,
            });

            // 可以通过 dialog 实例操作对话框
            dialog.close({ action: 'confirm' });
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | - | 对话框标题 |
| position | string | 'center' | 对话框位置，可选值：`center`（居中）、`right`（右侧）、`bottom`（底部） |
| close-on-click-outside | boolean | false | 是否点击外部区域关闭对话框 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | undefined | 对话框标题内部数据 |
| closeOnClickOutside | boolean | false | 是否点击外部关闭内部数据 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 对话框内容插槽，用于插入自定义内容 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| show | 对话框打开时 | - | 对话框打开事件 |
| close | 对话框关闭时 | data | 对话框关闭事件，可传递关闭数据 |
| init | 组件初始化时 | - | 组件初始化事件 |
| mount | 组件挂载时 | - | 组件挂载事件 |

### 事件监听示例

```html
<wiy-dialog
    title="提示"
    wiy:onshow="this.onShow"
    wiy:onclose="this.onClose">
    内容
</wiy-dialog>
```

```javascript
export default {
    methods: {
        onShow() {
            console.log('对话框已打开');
        },
        onClose(data) {
            console.log('对话框已关闭，数据:', data);
        }
    }
};
```

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| showModal() | 无 | Promise | 以模态方式显示对话框，返回 Promise，对话框关闭时 resolve |
| show() | 无 | 无 | 显示对话框（非模态） |
| close(data) | data: any | 无 | 关闭对话框，可传递数据 |

### showModal() 示例

```javascript
const dialog = this.getElement('myDialog');
const result = await dialog.showModal();
console.log('对话框关闭，返回:', result);
```

### close() 示例

```javascript
const dialog = this.getElement('myDialog');
dialog.close({ action: 'confirm', value: 'ok' });
```

## 全局函数 global method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| showDialog(options) | options: object | Promise&lt;Dialog&gt; | 全局方法，创建并显示对话框 |

### showDialog() 参数说明

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | - | 对话框标题 |
| content | string/HTMLElement/Component | - | 对话框内容，支持 HTML、DOM 元素或组件 |
| contentData | object | - | 内容数据上下文 |
| position | string | 'center' | 对话框位置 |
| closeOnClickOutside | boolean | false | 是否点击外部关闭 |

### showDialog() 示例

```javascript
const dialog = await this.getApp().showDialog({
    title: '确认',
    content: '确定要执行此操作吗？',
    position: 'center',
    closeOnClickOutside: true,
});

// 监听关闭事件
dialog.on('close', (data) => {
    console.log('对话框关闭', data);
});
```

## 样式 style

Dialog 组件支持通过 CSS 调整样式：

```css
wiy-dialog {
    /* 自定义对话框大小 */
    --wiy-dialog-width: 500px;
    --wiy-dialog-height: 400px;
}

/* 自定义对话框内容样式 */
wiy-dialog #content {
    padding: 20px;
    min-height: 100px;
}

/* 自定义标题样式 */
wiy-dialog #head {
    background-color: #f5f5f5;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-link | 用于关闭按钮链接 |
| 组件 | wiy-icon | 用于关闭按钮图标 |
| 组件 | wiy-back-top | 用于内容区域返回顶部 |

## 注意事项

1. Dialog 基于原生 &lt;dialog&gt; 元素实现，具有模态特性
2. 使用 showModal() 方法会阻止背景交互，show() 方法不会
3. position="right" 和 position="bottom" 适合作为抽屉式对话框使用
4. 全局方法 showDialog 会自动将对话框添加到 document.body
5. 通过 showDialog 创建的对话框会在关闭时自动移除
6. 支持使用 Esc 键关闭对话框
7. 对话框内容区域支持滚动，并集成了返回顶部功能
8. 全局方法的 content 支持 HTML 字符串、DOM 元素或 wiy 组件
