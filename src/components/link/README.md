# Link 链接组件

## 简介

Link 组件是 wiy-ui 组件库中的导航组件，提供可点击的链接功能，支持外部链接和内部路由导航，并提供多种主题样式和状态。

## 用法

### 基础用法

```html
<wiy-link href="https://example.com">外部链接</wiy-link>
```

### 内部路由导航

```html
<wiy-link href="/page/home">内部链接</wiy-link>
```

### 主题样式

```html
<!-- 默认主题 -->
<wiy-link href="https://example.com">默认链接</wiy-link>

<!-- 主色调主题 -->
<wiy-link href="https://example.com" theme="primary">主色调链接</wiy-link>

<!-- 危险色调主题 -->
<wiy-link href="https://example.com" theme="danger">危险链接</wiy-link>
```

### 下划线样式

```html
<!-- 始终显示下划线 -->
<wiy-link href="https://example.com" underline>下划线链接</wiy-link>

<!-- 鼠标悬停显示下划线 -->
<wiy-link href="https://example.com" underline="hover">悬停下划线</wiy-link>
```

### 图标链接

```html
<wiy-link href="https://example.com" icon="external-link-alt">带图标链接</wiy-link>
```

### 块级链接

```html
<wiy-link href="https://example.com" block>块级链接</wiy-link>
```

### 无跳转链接

```html
<wiy-link no-href wiy:onclick="this.handleClick">无跳转链接</wiy-link>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| href | string | - | 链接地址（支持内部路由） |
| target | string | '_self' | 打开方式，可选值：`_self`（当前窗口）、`_blank`（新窗口）、`_parent`（父框架）、`_top`（顶级框架） |
| theme | string | - | 主题样式，可选值：`primary`（主色调）、`danger`（危险色调） |
| underline | boolean/string | - | 下划线样式，可选值：`true`（始终显示）、`hover`（悬停显示） |
| block | boolean | false | 是否块级显示 |
| no-href | boolean | false | 是否禁用跳转（点击不跳转） |
| icon | string | - | 左侧图标名称 |
| icon-prefix | string | - | 图标前缀，用于指定图标库 |
| icon-spin | boolean | false | 图标是否旋转 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| href | string | undefined | 链接地址内部数据（支持 Data 绑定） |
| target | string | undefined | 打开方式内部数据（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | href 属性值 | 链接内容插槽，用于自定义显示内容 |

## 事件 event

本组件无事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| onClick() | event | 无 | 点击事件处理函数 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Link 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 默认主题颜色 */
    --wiy-link-color: #1890ff;
    --wiy-link-color-hover: #40a9ff;
    --wiy-link-color-active: #096dd9;

    /* 主色调主题颜色 */
    --wiy-link-primary-color: #1890ff;
    --wiy-link-primary-color-hover: #40a9ff;
    --wiy-link-primary-color-active: #096dd9;

    /* 危险色调主题颜色 */
    --wiy-link-danger-color: #ff4d4f;
    --wiy-link-danger-color-hover: #ff7875;
    --wiy-link-danger-color-active: #d93025;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示图标 |

## 注意事项

1. 组件支持内部路由导航，对于以 '/' 开头的地址会尝试使用路由跳转
2. 外部链接（以 http:// 或 https:// 开头）会直接跳转
3. 点击事件会先执行组件内部逻辑，再执行自定义事件
4. 组件会自动处理路由参数和相对路径
5. 支持所有标准的 HTML a 标签属性

## 路由导航

组件内部集成了 wiy 框架的路由系统：

```javascript
// 内部会判断是否为内部链接
const isInternal = router.isInternalLink(href);

// 转换为相对路径
const relativePath = router.toRelativePath(href);
```

## 事件处理

```javascript
export default {
    methods: {
        handleClick(event) {
            // 自定义点击事件
            console.log('链接被点击');
        },
    },
};
```
