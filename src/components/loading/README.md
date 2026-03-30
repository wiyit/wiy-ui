# Loading 加载组件

## 简介

Loading 组件是 wiy-ui 组件库中的加载状态组件，提供全局和局部的加载状态提示，支持自定义图标和文本，适用于数据加载、表单提交等场景。

## 用法

### 基础用法

```html
<wiy-loading wiy:data-loading="this.isLoading"></wiy-loading>
```

```javascript
export default {
    data: {
        isLoading: false,
    },
    methods: {
        async fetchData() {
            this.isLoading = true;
            // 模拟数据加载
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.isLoading = false;
        },
    },
};
```

### 自定义文本

```html
<wiy-loading text="加载中..." wiy:data-loading="this.isLoading"></wiy-loading>
```

### 自定义图标

```html
<wiy-loading icon="circle-notch" wiy:data-loading="this.isLoading"></wiy-loading>
```

### 全屏加载

```html
<wiy-loading fullscreen wiy:data-loading="this.isLoading"></wiy-loading>
```

### 静态加载

```html
<wiy-loading text="加载完成" wiy:data-loading="true"></wiy-loading>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | '加载中...' | 加载提示文本 |
| icon | string | 'spinner' | 加载图标名称 |
| fullscreen | boolean | false | 是否全屏显示加载遮罩 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| loading | boolean | false | 加载状态（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 自定义内容插槽（当有子内容时显示在加载遮罩下方） |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Loading 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-loading-text-color: #333;
    --wiy-loading-mask-color: rgba(255, 255, 255, 0.7);
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示加载图标 |

## 注意事项

1. 组件支持局部加载和全屏加载两种模式
2. 全屏加载会阻止用户交互，使用 `showModal()` 和 `close()` 方法
3. 加载状态通过 `loading` 数据属性控制
4. 支持自定义加载文本和图标
5. 组件内部使用 dialog 元素实现加载遮罩

## 全屏加载使用

```javascript
const loading = this.getElement('fullscreenLoading');
loading.loading = true; // 显示加载中
// 或
loading.loading = false; // 隐藏加载中
```

## 键盘事件

1. 全屏加载模式下会阻止 ESC 键关闭
2. 加载遮罩会监听 keydown 事件
3. 支持 tab 键导航到加载遮罩内部

## 响应式设计

1. 加载遮罩会自动居中显示
2. 支持在不同屏幕尺寸下的响应式布局
3. 加载动画会保持在屏幕中心

## 性能优化

1. 组件使用 ResizeObserver 监听尺寸变化
2. 加载状态变化会自动触发重计算
3. 建议避免频繁切换加载状态
