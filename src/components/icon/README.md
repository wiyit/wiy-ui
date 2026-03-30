# Icon 图标组件

## 简介

Icon 组件是 wiy-ui 组件库中用于显示图标的基础组件，基于 Font Awesome 实现，支持多种样式的图标。

## 用法

### 基础用法

```html
<wiy-icon name="check"></wiy-icon>
```

### 图标风格

```html
<!-- Solid 风格（默认） -->
<wiy-icon name="check" prefix="fas"></wiy-icon>
<wiy-icon name="home" prefix="fas"></wiy-icon>
<wiy-icon name="search" prefix="fas"></wiy-icon>

<!-- Regular 风格 -->
<wiy-icon name="check" prefix="far"></wiy-icon>
<wiy-icon name="home" prefix="far"></wiy-icon>

<!-- Brands 风格 -->
<wiy-icon name="github" prefix="fab"></wiy-icon>
<wiy-icon name="twitter" prefix="fab"></wiy-icon>
```

### 旋转图标

```html
<!-- 加载状态 -->
<wiy-icon name="spinner" spin></wiy-icon>

<!-- 动态控制旋转 -->
<wiy-icon name="spinner" wiy:attr-spin="this.isLoading"></wiy-icon>
```

### 主题样式

```html
<wiy-icon name="info-circle" theme="info"></wiy-icon>
<wiy-icon name="check-circle" theme="success"></wiy-icon>
<wiy-icon name="exclamation-triangle" theme="warning"></wiy-icon>
<wiy-icon name="times-circle" theme="error"></wiy-icon>
```

### Data 绑定

```html
<wiy-icon wiy:data-name="this.iconName" wiy:data-prefix="this.iconPrefix"></wiy-icon>
```

```javascript
export default {
    data: {
        iconName: 'check',
        iconPrefix: 'fas',
    },
    methods: {
        changeIcon() {
            this.iconName = 'home';
            this.iconPrefix = 'far';
        }
    }
};
```

### 图标大小调整

```html
<!-- 通过 font-size 调整图标大小 -->
<wiy-icon name="check" style="font-size: 16px;"></wiy-icon>
<wiy-icon name="check" style="font-size: 24px;"></wiy-icon>
<wiy-icon name="check" style="font-size: 32px;"></wiy-icon>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| name | string | - | 图标名称（支持 Data 绑定） |
| prefix | string | 'fas' | 图标前缀，可选值：`fas`（solid）、`far`（regular）、`fab`（brands） |
| spin | boolean | false | 图标是否旋转（加载状态） |
| theme | string | - | 图标主题，可选值：`info`、`success`、`warning`、`error` |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| prefix | string | undefined | 图标前缀内部数据 |
| name | string | undefined | 图标名称内部数据 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

本组件无事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getHtml() | 无 | string | 获取图标的 HTML 字符串 |

### getHtml() 示例

```javascript
const icon = this.getElement('myIcon');
const iconHtml = icon.getHtml();
console.log('图标 HTML:', iconHtml);
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Icon 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-icon-info-color: #1890ff;
    --wiy-icon-success-color: #52c41a;
    --wiy-icon-warning-color: #faad14;
    --wiy-icon-error-color: #ff4d4f;
}

wiy-icon {
    font-size: 24px; /* 调整图标大小 */
    color: #ff0000; /* 调整图标颜色 */
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 第三方库 | @fortawesome/fontawesome-svg-core | Font Awesome 核心库 |
| 第三方库 | @fortawesome/free-solid-svg-icons | Solid 风格图标库 |
| 第三方库 | @fortawesome/free-regular-svg-icons | Regular 风格图标库 |
| 第三方库 | @fortawesome/free-brands-svg-icons | Brands 风格图标库 |

## 注意事项

1. 图标名称不区分大小写，但推荐使用小写
2. 图标前缀（prefix）只支持 fas、far、fab 三种
3. spin 属性会使图标无限旋转（适用于加载状态）
4. 组件已集成 Font Awesome，无需额外引入
5. 图标颜色和大小继承自父元素，可通过 CSS 覆盖
6. 完整图标列表请参考 Font Awesome 官方文档
