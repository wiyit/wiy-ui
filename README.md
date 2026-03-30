# @wiyit/wiy-ui
==========

专门为 [wiy 框架](https://github.com/wiyit/wiy) 设计的 UI 组件库，提供 47 个常用 UI 组件，支持现代化 Web 应用开发。

## 特性

- 基于 **wiy 框架** 构建，遵循配置式、模块化和组件化哲学
- 47 个常用 UI 组件，覆盖基础布局、表单、数据展示等场景
- 完整的样式系统，基于 TDesign 设计规范
- 集成主流第三方库：CodeMirror（代码编辑）、ECharts（图表）、TinyMCE（富文本）、MapvGL（地图）
- 支持按需加载和自动响应式系统

## 安装

```bash
npm install @wiyit/wiy-ui
```

**注意**：wiy-ui 依赖于 wiy 框架，需要在项目中单独安装：
```bash
npm install @wiyit/wiy
```

## 快速开始

在 wiy 应用中使用：

```javascript
import wiy from '@wiyit/wiy';

new wiy.App({
    pages: {
        'page/home': import('./pages/home/home.js'),
    },
    index: 'page/home',
    plugins: [
        import('@wiyit/wiy-ui'),
    ],
});
```

在页面中使用组件：

```html
<wiy-button theme="primary" wiy:onclick="this.handleClick">
    点击我
</wiy-button>
```

## 组件列表

### 基础组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Button 按钮 | `wiy-button` | 最基础的交互组件，用于触发用户交互操作 | [README](src/components/button/README.md) |
| Icon 图标 | `wiy-icon` | 基于 Font Awesome 实现，支持多种样式的图标 | [README](src/components/icon/README.md) |
| Link 链接 | `wiy-link` | 文本链接组件 | [README](src/components/link/README.md) |
| Divider 分割线 | `wiy-divider` | 内容分割线组件 | [README](src/components/divider/README.md) |

### 布局组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Flex 弹性布局 | `wiy-flex` | 基于 CSS Flexbox 的布局组件 | [README](src/components/flex/README.md) |
| Grid 网格布局 | `wiy-grid` | 基于 CSS Grid 的网格布局组件 | [README](src/components/grid/README.md) |
| Keep Aspect Ratio 保持宽高比 | `wiy-keep-aspect-ratio` | 保持元素宽高比的容器组件 | [README](src/components/keep-aspect-ratio/README.md) |

### 表单组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Input 输入框 | `wiy-input` | 基础表单组件，用于收集用户输入 | [README](src/components/input/README.md) |
| Textarea 多行输入框 | `wiy-textarea` | 多行文本输入组件 | [README](src/components/textarea/README.md) |
| Checkbox 复选框 | `wiy-checkbox` | 复选框组件 | [README](src/components/checkbox/README.md) |
| Checkbox Group 复选框组 | `wiy-checkbox-group` | 复选框组组件 | [README](src/components/checkbox-group/README.md) |
| Radio 单选框 | `wiy-radio` | 单选框组件 | [README](src/components/radio/README.md) |
| Radio Group 单选框组 | `wiy-radio-group` | 单选框组组件 | [README](src/components/radio-group/README.md) |
| Select 选择器 | `wiy-select` | 下拉选择器组件 | [README](src/components/select/README.md) |
| Cascader 级联选择器 | `wiy-cascader` | 级联选择器组件 | [README](src/components/cascader/README.md) |
| Rate 评分 | `wiy-rate` | 评分组件 | [README](src/components/rate/README.md) |
| File Picker 文件选择器 | `wiy-file-picker` | 文件选择上传组件 | [README](src/components/file-picker/README.md) |
| Form 表单 | `wiy-form` | 表单容器组件 | [README](src/components/form/README.md) |

### 数据展示

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Badge 徽标 | `wiy-badge` | 徽标数展示组件 | [README](src/components/badge/README.md) |
| Table 表格 | `wiy-table` | 表格数据展示组件 | [README](src/components/table/README.md) |
| Image 图片 | `wiy-image` | 图片展示组件 | [README](src/components/image/README.md) |
| Image Viewer 图片预览 | `wiy-image-viewer` | 图片预览查看器组件 | [README](src/components/image-viewer/README.md) |
| Video 视频 | `wiy-video` | 视频播放组件 | [README](src/components/video/README.md) |
| Ellipsis 文本省略 | `wiy-ellipsis` | 文本省略展示组件 | [README](src/components/ellipsis/README.md) |
| Empty 空状态 | `wiy-empty` | 空状态展示组件 | [README](src/components/empty/README.md) |
| Carousel 走马灯 | `wiy-carousel` | 走马灯轮播组件 | [README](src/components/carousel/README.md) |
| Tabs 标签页 | `wiy-tabs` | 标签页切换组件 | [README](src/components/tabs/README.md) |
| Steps 步骤条 | `wiy-steps` | 步骤条组件 | [README](src/components/steps/README.md) |
| Progress 进度条 | `wiy-progress` | 进度条组件 | [README](src/components/progress/README.md) |

### 导航组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Menus 菜单 | `wiy-menus` | 菜单导航组件 | [README](src/components/menus/README.md) |
| Breadcrumb 面包屑 | `wiy-breadcrumb` | 面包屑导航组件 | [README](src/components/breadcrumb/README.md) |
| Pagination 分页 | `wiy-pagination` | 分页组件 | [README](src/components/pagination/README.md) |
| Back Top 返回顶部 | `wiy-back-top` | 返回顶部组件 | [README](src/components/back-top/README.md) |

### 反馈组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Dialog 对话框 | `wiy-dialog` | 模态对话框组件 | [README](src/components/dialog/README.md) |
| Message 消息提示 | `wiy-message` | 消息提示组件 | [README](src/components/message/README.md) |
| Popover 气泡卡片 | `wiy-popover` | 气泡卡片组件 | [README](src/components/popover/README.md) |
| Tooltip 文字提示 | `wiy-tooltip` | 文字提示组件 | [README](src/components/tooltip/README.md) |
| Loading 加载 | `wiy-loading` | 加载状态组件 | [README](src/components/loading/README.md) |
| Floater 浮层 | `wiy-floater` | 浮层容器组件 | [README](src/components/floater/README.md) |

### 其他组件

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Frame 框架 | `wiy-frame` | iframe 封装组件 | [README](src/components/frame/README.md) |
| Scroll 滚动 | `wiy-scroll` | 滚动容器组件 | [README](src/components/scroll/README.md) |
| Pre 代码展示 | `wiy-pre` | 代码展示组件 | [README](src/components/pre/README.md) |
| Dropdown 下拉菜单 | `wiy-dropdown` | 下拉菜单组件 | [README](src/components/dropdown/README.md) |

### 高级组件（按需引入）

以下组件默认不注册，需要按需引入：

| 组件名 | 标签 | 说明 | 文档 |
|--------|------|------|------|
| Chart 图表 | `wiy-chart` | 基于 ECharts 的图表组件 | [README](src/components/chart/README.md) |
| Code 代码编辑器 | `wiy-code` | 基于 CodeMirror 的代码编辑器 | [README](src/components/code/README.md) |
| Editor 富文本编辑器 | `wiy-editor` | 基于 TinyMCE 的富文本编辑器 | [README](src/components/editor/README.md) |
| Map 地图 | `wiy-map` | 基于 MapvGL 的地图组件 | [README](src/components/map/README.md) |

## 全局方法

### showDialog 对话框

```javascript
const dialog = await this.getApp().showDialog({
    title: '提示',
    content: '这是对话框内容',
    position: 'center',
    closeOnClickOutside: true,
});
```

详细文档：[Dialog 组件文档](src/components/dialog/README.md)

### showMessage 消息提示

```javascript
this.getApp().showMessage({
    theme: 'success',
    content: '操作成功！',
    duration: 3000,
    position: 'top',
    closable: true,
});
```

详细文档：[Message 组件文档](src/components/message/README.md)

## 主题定制

wiy-ui 使用 CSS 变量系统支持主题定制，核心变量定义在 `src/themes/tdesign.scss`。

### 自定义主题颜色

```css
:root {
    /* 主色 */
    --brand-color: #0052D9;
    --brand-color-light: #F2F3FF;
    --brand-color-hover: #366EF4;
    --brand-color-active: #003CAB;

    /* 功能色 */
    --success-color: #2BA471;
    --warning-color: #E37318;
    --error-color: #D54941;

    /* 文字色 */
    --text-color-primary: rgba(0, 0, 0, 0.9);
    --text-color-secondary: rgba(0, 0, 0, 0.6);
    --text-color-placeholder: rgba(0, 0, 0, 0.4);
}
```

## 开发指南

### 组件开发模式

每个组件采用 **HTML 模板 + JavaScript + SCSS 分离** 的开发模式：

```javascript
// button.js
import template from './button.html';
import style from './button.scss';

export default {
    template,
    style,
    data: {
        disabled: false,
    },
};
```

```html
<!-- button.html -->
<button wiy:attr-disabled="(this.disabled || this.hasAttr('disabled')) ? '' : undefined">
    <wiy-icon wiy:if="this.attr('icon')" name="{{this.attr('icon')}}"
        wiy:attr-prefix="this.attr('icon-prefix')"
        wiy:attr-spin="this.attr('icon-spin')"></wiy-icon>
    <div wiy:if="this.isSlotAssigned()">
        <slot></slot>
    </div>
</button>
```

### 组件文档规范

每个组件的 README 文档包含以下章节：

1. 简介 - 组件用途和定位
2. 用法 - 功能模块和代码示例
3. 属性 attr - 支持的属性列表
4. 数据 data - 响应式数据列表
5. 插槽 slot - 插槽列表
6. 事件 event - 事件列表
7. 实例函数 method - 实例函数列表
8. 全局函数 global method - 全局函数列表
9. 样式 style - CSS 变量和样式定制
10. 依赖 - 依赖的组件或第三方库
11. 注意事项 - 使用注意事项

## 核心依赖

| 库名 | 版本 | 说明 |
|------|------|------|
| @wiyit/wiy | ^1.0.0 | wiy 框架（peer dependency） |
| @fortawesome/fontawesome-svg-core | ^7.0.0 | Font Awesome 核心库 |
| @fortawesome/free-solid-svg-icons | ^7.0.0 | Solid 风格图标 |
| @fortawesome/free-regular-svg-icons | ^7.0.0 | Regular 风格图标 |
| @fortawesome/free-brands-svg-icons | ^7.0.0 | Brands 风格图标 |
| codemirror | ^6.0.1 | 代码编辑器 |
| echarts | ^6.0.0 | 图表库 |
| tinymce | ^8.3.2 | 富文本编辑器 |
| mapvgl | ^1.0.0-beta.191 | 地图可视化 |

## 仓库

[https://github.com/wiyit/wiy-ui](https://github.com/wiyit/wiy-ui)

## License

MIT
