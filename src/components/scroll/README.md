# Scroll 滚动组件

## 简介

Scroll 组件是 wiy-ui 组件库中的容器组件，用于实现内容的自动滚动功能，支持自定义滚动速度、延迟等参数。

## 用法

### 基础用法

```html
<wiy-scroll style="height: 200px;">
    <div>内容1</div>
    <div>内容2</div>
    <div>内容3</div>
    <!-- 更多内容 -->
</wiy-scroll>
```

### 自动滚动

```html
<!-- 启用自动滚动 -->
<wiy-scroll wiy:data-auto-scroll="{ enabled: true }" style="height: 200px;">
    <div>自动滚动内容</div>
    <!-- 更多内容 -->
</wiy-scroll>
```

### 自定义滚动参数

```html
<wiy-scroll wiy:data-auto-scroll="this.autoScrollConfig" style="height: 200px;">
    <div>自定义滚动配置</div>
    <!-- 更多内容 -->
</wiy-scroll>
```

```javascript
export default {
    data: {
        autoScrollConfig: {
            enabled: true,
            heightPerSecond: 50, // 每秒滚动距离（像素）
            startDelay: 3000, // 开始延迟（毫秒）
            endDelay: 2000, // 结束延迟（毫秒）
        },
    },
};
```

## 属性 attr

本组件无公开属性。

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| autoScroll | object | { enabled: false, heightPerSecond: 30, startDelay: 2000, endDelay: 2000 } | 自动滚动配置（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 滚动容器内容插槽 |

## 事件 event

本组件无事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| startAutoScroll() | 无 | 无 | 开始自动滚动 |
| stopAutoScroll() | 无 | 无 | 停止自动滚动 |

### 实例函数示例

```javascript
// 获取 scroll 组件实例
const scroll = this.getElement('myScroll');

// 开始自动滚动
scroll.startAutoScroll();

// 停止自动滚动
scroll.stopAutoScroll();
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Scroll 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 可根据需要添加自定义样式变量 */
}
```

## 依赖

本组件无外部依赖。

## 注意事项

1. 使用时需要设置固定高度，否则内容不会滚动
2. 当内容高度小于容器高度时，不会触发自动滚动
3. 支持鼠标移动时停止滚动，鼠标移出时恢复滚动
4. 组件会在 mount 和 beforeUnmount 生命周期中自动处理滚动状态
5. 滚动配置参数可动态修改
