# Floater 浮动组件

## 简介

Floater 组件是 wiy-ui 组件库中提供的浮动动画组件，支持自动移动、暂停、关闭等功能，可用于创建悬浮提示、广告、通知等动态效果。

## 用法

### 基础用法

```html
<wiy-floater>
    <div style="width: 100px; height: 100px; background: #1890ff; color: white;">
        浮动内容
    </div>
</wiy-floater>
```

### 限制在窗口内

```html
<wiy-floater in-window>
    <div style="width: 100px; height: 100px; background: #52c41a;">
        窗口内浮动
    </div>
</wiy-floater>
```

### 不可关闭

```html
<wiy-floater non-closable>
    <div style="width: 100px; height: 100px; background: #faad14;">
        不可关闭
    </div>
</wiy-floater>
```

### 控制可见性

```html
<wiy-floater wiy:data-visible="this.isVisible">
    <div style="width: 100px; height: 100px; background: #ff4d4f;">
        {{this.isVisible ? '显示' : '隐藏'}}
    </div>
</wiy-floater>
```

```javascript
export default {
    data: {
        isVisible: true,
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
    },
};
```

### 事件监听

```html
<wiy-floater wiy:onmouseenter="this.handleStop" wiy:onmouseleave="this.handleMove">
    <div style="width: 100px; height: 100px; background: #722ed1;">
        鼠标悬浮暂停
    </div>
</wiy-floater>
```

```javascript
export default {
    methods: {
        handleStop() {
            console.log('浮窗已暂停');
        },
        handleMove() {
            console.log('浮窗已恢复移动');
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| in-window | boolean | false | 浮动范围是否限制在窗口范围内 |
| non-closable | boolean | false | 是否隐藏关闭按钮（不可关闭） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| visible | boolean | true | 浮窗是否可见（支持 Data 绑定） |
| stopped | boolean | false | 浮窗是否暂停移动（内部状态） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 浮窗内容插槽，用于插入需要浮动的内容 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| mouseenter | 鼠标进入浮窗时 | event | 暂停移动事件 |
| mouseleave | 鼠标离开浮窗时 | event | 恢复移动事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| move() | 无 | void | 恢复浮窗移动 |
| stop() | 无 | void | 暂停浮窗移动 |
| close() | 无 | void | 关闭浮窗（设置 visible 为 false） |

### 方法调用示例

```javascript
const floater = this.getElement('myFloater');

// 暂停移动
floater.stop();

// 2秒后恢复移动
setTimeout(() => {
    floater.move();
}, 2000);

// 5秒后关闭
setTimeout(() => {
    floater.close();
}, 5000);
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Floater 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-floater-close-color-hover: red;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示关闭按钮图标 |

## 注意事项

1. 组件必须放置在具有定位属性（position: relative/absolute/fixed）的父容器中
2. 浮动范围默认限制在父容器内，可通过 `in-window` 属性扩展到整个窗口
3. 鼠标悬浮浮窗会自动暂停移动，离开后恢复
4. 关闭按钮点击后会隐藏浮窗（visible = false），而非移除 DOM
5. 组件使用 requestAnimationFrame 实现平滑动画
6. 浮窗尺寸建议通过内容或样式明确设置，避免自适应布局导致的问题
7. 如需完全移除浮窗，可监听 visible 变化后手动操作 DOM
