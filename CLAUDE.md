```
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
```

# wiy-ui 组件库开发指南

## 项目概述

wiy-ui 是专门为 **wiy 框架** 设计的 UI 组件库，提供 50+ 个常用 UI 组件，支持现代化 Web 应用开发。

## 核心特性

- 基于 **wiy 框架** 构建，遵循配置式、模块化和组件化哲学
- 50+ 个常用 UI 组件，覆盖基础布局、表单、数据展示等场景
- 完整的样式系统，支持主题定制和响应式设计
- 集成主流第三方库：CodeMirror（代码编辑）、ECharts（图表）、TinyMCE（富文本）、MapvGL（地图）
- 支持按需加载和自动响应式系统

## 项目架构

### 目录结构

```
wiy-ui/
├── src/
│   ├── index.js                    # 组件库入口，注册所有组件
│   ├── themes/
│   │   └── tdesign.scss            # TDesign 主题变量
│   └── components/
│       ├── style.scss              # 全局样式变量
│       ├── button/                 # 按钮组件（示例）
│       │   ├── button.js
│       │   ├── button.html
│       │   └── button.scss
│       ├── dialog/                 # 对话框组件
│       ├── input/                  # 输入框组件
│       └── [其他 50+ 个组件]
├── package.json
└── [构建配置文件]
```

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

## 开发命令

### 项目脚本

```bash
# 开发模式（启动开发服务器）
npm run dev

# 生产构建
npm run build-prod

# 构建并预览
npm run preview

# 检查依赖
npm run check-deps
```

## wiy 框架核心概念

### 应用 (App)

```javascript
import wiy from '@wiyit/wiy';

new wiy.App({
    pages: {
        'page/first': import('./pages/page1/page1.js'),
        'page/second': import('./pages/page2/page2.js'),
    },
    index: 'page/first',
    plugins: [
        import('@wiyit/wiy-ui'),
        import('other-custom-plugin'),
    ],
    lifecycle: {
        init() {
            console.log('应用初始化成功');
        },
    },
});
```

### 组件系统

- 基于 Web Components 标准，使用 Shadow DOM 实现样式隔离
- 支持属性传递、事件绑定和数据双向绑定
- 自动响应式系统：数据变化时自动更新 DOM
- 支持条件渲染 (`wiy:if`)、列表渲染 (`wiy:for`)、插槽等

### 指令系统

常用指令优先级（从高到低）：
1. `wiy:let` - 变量声明
2. `wiy:if` - 条件渲染
3. `wiy:for` - 列表渲染
4. `wiy:slot` - 插槽
5. `wiy:template` - 模板引入
6. `wiy:onxxx` - 事件绑定
7. `wiy:html` - 富文本渲染
8. `wiy:attr` - 属性绑定
9. `wiy:class` - 类名绑定
10. `wiy:style` - 样式绑定
11. `wiy:data` - 数据绑定
12. `wiy:await` - 等待事件

## 组件使用方式

### 全局方法组件

部分组件（如 Dialog、Message）注册为应用级全局方法，可通过 `this.getApp().showDialog()` 或 `this.getApp().showMessage()` 调用。

**示例：**

```javascript
// 显示对话框
const dialog = await this.getApp().showDialog({
    title: '提示',
    content: '这是一个对话框内容',
    position: 'center',
    closeOnClickOutside: true,
});

// 显示消息
this.getApp().showMessage({
    theme: 'success',
    content: '操作成功！',
    duration: 3000,
    position: 'top',
    closable: true,
});
```

### 基础组件使用

```html
<wiy-button
    icon="check"
    icon-prefix="fas"
    wiy:onclick="this.onButtonClick">
    确认
</wiy-button>
```

## 主题定制

wiy-ui 使用 **CSS 变量系统** 支持主题定制，核心变量定义在 `src/themes/tdesign.scss`。

## 注意事项

- 组件标签必须使用烤串格式（kebab-case）
- 组件属性支持动态绑定和表达式
- 事件监听使用 `wiy:onxxx` 指令
- 数据绑定使用 `wiy:data` 指令

## 核心依赖

- CodeMirror 6 - 代码编辑器
- Font Awesome - 图标库
- ECharts - 图表库
- TinyMCE - 富文本编辑器
- MapvGL - 地图可视化

## 重要提醒

**当开发或使用组件库中的组件时，必须精通 wiy 框架，必要时要仔细研究 wiy 框架的 README 文件及源代码。**

wiy 框架的文档位于 `node_modules/@wiyit/wiy/`，包含：
- README.md - 框架使用文档
- claude.md - Claude 开发指南
- src/wiy.js - 框架核心源代码

## 组件文档编写思路和准则

### 一、文档结构标准

每个组件的README文档必须包含以下11个章节，顺序保持一致：

#### 1. 简介
- 对组件进行简单介绍
- 简洁说明组件的用途和定位
- 强调组件在wiy-ui组件库中的角色

#### 2. 用法
- 列出组件的所有用法
- 基础用法：最简单的使用示例
- 各功能模块详细说明
- 每个功能都要有代码示例
- 按功能分类组织（如主题样式、图标按钮、禁用状态等）

#### 3. 属性 attr
| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
- 列出所有支持的attr属性
- 类型包括：string、boolean、number、array等
- 说明要清晰，可选值要列出
- 标记支持Data绑定的属性

#### 4. 数据 data
| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
- 列出所有支持的公开的data清单
- 列出组件data中定义的响应式数据
- 说明数据的用途和更新方式

#### 5. 插槽 slot
| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
- 列出所有支持的slot清单
- 默认内容说明插槽的默认显示
- 说明插槽的用途和使用场景

#### 6. 事件 event
| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
- 列出所有支持的公开的event清单
- 说明事件的触发时机
- 说明回调函数的参数

#### 7. 实例函数 method
| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
- 列出所有支持的公开的method清单
- 说明参数的类型和用途
- 说明返回值的类型和含义
- 每个函数提供使用示例

#### 8. 全局函数 global method
| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
- 列出所有支持全局函数清单
- 列出所有全局注册的方法（如showDialog、showMessage）
- 说明参数的类型和用途
- 说明返回值的类型和含义
- 每个函数提供使用示例

#### 9. 样式 style
- 列出所有支持的样式定制方案
- 列出支持的CSS变量
- 展示如何通过CSS变量调整样式
- 提供CSS变量表格或示例

#### 10. 依赖
| 类型 | 名称 | 说明 |
|------|------|------|
- 列出所有依赖的其他组件或第三方库
- 说明依赖的用途

#### 11. 注意事项
- 列出使用时需要注意的关键点
- 浏览器策略限制、兼容性等
- 常见问题和解决方案

### 二、三源对比审查法

审查文档完整性时，必须同时检查以下三个文件：

#### 1. `.js` 文件（逻辑层）
- 检查 `data` 中定义的属性
- 检查组件函数（methods）
- 检查事件处理逻辑

#### 2. `.html` 文件（视图层）
- 检查模板中使用的属性
- 检查插槽（slot）定义
- 检查指令使用（`wiy:if`、`wiy:for`等）
- 检查事件绑定（`wiy:onxxx`）

#### 3. `.scss` 文件（样式层）
- **关键**：检查所有 `:host([属性名])` 选择器
- 这些属性通常只在CSS中定义，不在JS/HTML中
- 常见的CSS定义属性：
  - `fit`（fill/contain/cover/none/scale-down）
  - `theme`（primary/danger）
  - `underline`（true/hover）
  - `block`
  - `dashed`
  - `vertical`
  - `nowrap`
  - `lines`
  - 等等

### 三、属性发现检查清单

#### 必须检查的属性来源：

- [ ] `.js` 文件的 `data` 对象
- [ ] `.js` 文件的 `this.attr('xxx')` 调用
- [ ] `.html` 文件的 `this.attr('xxx')` 调用
- [ ] `.html` 文件的 `wiy:attr-xxx` 指令
- [ ] `.scss` 文件的 `:host([xxx])` 选择器
- [ ] `.scss` 文件的 `:host([xxx=yyy])` 选择器

#### 常见遗漏属性类型：

1. **纯CSS属性**：仅在SCSS中定义的样式控制属性
2. **布尔属性**：存在即生效的属性（如 `block`、`dashed`）
3. **枚举属性**：有固定可选值的属性（如 `fit`、`theme`）

### 三、插槽发现检查清单

#### 必须检查的插槽来源：

- [ ] `.html` 文件的 `<slot>` 标签
- [ ] `.html` 文件的 `<slot name="xxx">` 具名插槽
- [ ] `.html` 文件的 `wiy:slot` 指令使用
- [ ] `.js` 文件的 `this.isSlotAssigned()` 调用
- [ ] `.js` 文件的插槽相关处理逻辑

#### 常见插槽类型：

1. **默认插槽**：没有name属性的`<slot>`
2. **具名插槽**：有name属性的`<slot name="xxx">`
3. **条件插槽**：通过`wiy:if`或其他指令控制显示的插槽

### 四、文档内容编写准则

#### 1. 属性说明准则
- 必须说明属性的类型
- 必须给出默认值
- 必须列出所有可选值（如果是枚举类型）
- 必须说明属性的作用

#### 2. 示例代码准则
- 每个功能至少一个示例
- 示例要完整、可运行
- 示例要包含HTML和JavaScript（如需要）
- 示例要简洁，突出重点

#### 3. 章节命名准则
- 使用清晰的中文名称
- 保持与其他文档一致
- 功能模块章节要具体（如"图片填充方式"而非"填充方式"）

#### 4. 格式统一准则
- 表格格式统一（表头、对齐方式）
- 代码块使用 ```html 和 ```javascript 标记
- 列表使用统一的符号
- 缩进使用4个空格

#### 5. 插槽说明准则
- 必须列出所有支持的插槽（默认插槽和具名插槽）
- 必须说明插槽的默认内容
- 必须说明插槽的用途和使用场景
- 必须提供使用示例
- 默认插槽名称用"default"表示

#### 6. 插槽示例代码准则
- 展示如何使用插槽传入内容
- 展示插槽的默认显示效果
- 示例要简洁，突出插槽的作用

### 六、审查检查清单

进行文档审查时，逐项确认：

- [ ] 文档结构包含所有11个标准章节（按新大纲顺序）
- [ ] 已读取并分析 `.js`、`.html`、`.scss` 三个文件
- [ ] 所有属性都已列出（包括纯CSS属性）
- [ ] 属性的类型、默认值、说明完整
- [ ] 所有支持的插槽都已列出
- [ ] 插槽的默认内容和用途说明完整
- [ ] 每个功能都有使用示例
- [ ] Data绑定（如支持）有完整示例
- [ ] 组件函数（如提供）有详细说明
- [ ] 事件监听（如有）有触发时机说明
- [ ] CSS变量（如有）已列出
- [ ] 注意事项包含关键使用要点
- [ ] 没有重复的章节或内容
- [ ] 格式清晰、条理一致
- [ ] 没有拼写错误或格式错误
- [ ] **已去掉"组件特性标记"表格**

### 六、常见问题处理

#### 问题1：属性只在CSS中定义，不在JS/HTML中
**处理**：仍需在文档中列出，因为用户可以通过属性使用

#### 问题2：文档中有重复内容
**处理**：删除重复章节，保留一个最完整的版本

#### 问题3：不确定属性是否支持
**处理**：检查三个源文件，确认后再决定是否添加

#### 问题4：示例代码复杂
**处理**：简化示例，只展示核心功能

### 七、关键经验总结

1. **CSS文件的重要性**：很多属性只在SCSS中定义，必须仔细检查
2. **三源对比法**：JS+HTML+SCSS三者结合，才能确保不遗漏
3. **用户视角**：文档是给用户看的，要清晰、完整、易用
4. **格式统一**：统一的格式让文档更专业、更易读
5. **持续审查**：文档写完后要反复审查，确保质量
