# Form 表单组件

## 简介

Form 组件是 wiy-ui 组件库中用于快速构建动态表单的高级组件，支持多种表单控件类型，提供数据绑定、验证和动态渲染功能。

## 用法

### 基础用法

```html
<wiy-form wiy:data-items="this.items" wiy:data-data="this.formData"></wiy-form>
```

```javascript
export default {
    data: {
        formData: {},
        items: [
            {
                name: 'name',
                label: '姓名',
                type: 'input',
                required: true,
            },
            {
                name: 'email',
                label: '邮箱',
                type: 'input',
                required: true,
            },
            {
                name: 'gender',
                label: '性别',
                type: 'radio-group',
                required: true,
                data: {
                    data: [
                        { value: 'male', label: '男' },
                        { value: 'female', label: '女' },
                    ],
                },
            },
        ],
    },
};
```

### 带标题和描述

```html
<wiy-form
    wiy:data-title="this.formTitle"
    wiy:data-desc="this.formDesc"
    wiy:data-items="this.items"
    wiy:data-data="this.formData">
</wiy-form>
```

```javascript
export default {
    data: {
        formTitle: '用户信息表单',
        formDesc: '请填写以下信息，带*号为必填项',
        formData: {},
        items: [
            // 表单项...
        ],
    },
};
```

### 表单操作按钮

```html
<wiy-form
    wiy:data-items="this.items"
    wiy:data-data="this.formData"
    wiy:data-operations="this.operations">
</wiy-form>
```

```javascript
export default {
    data: {
        formData: {},
        items: [/* 表单项 */],
        operations: [
            {
                name: '保存',
                theme: 'primary',
                icon: 'save',
                onclick: (form) => {
                    console.log('保存数据:', form.actualData);
                },
            },
            {
                name: '重置',
                onclick: (form) => {
                    // 重置表单逻辑
                },
            },
        ],
    },
};
```

### 多列布局

```html
<!-- 2列布局（默认） -->
<wiy-form wiy:data-items="this.items" columns="2"></wiy-form>

<!-- 4列布局 -->
<wiy-form wiy:data-items="this.items" columns="4"></wiy-form>

<!-- 6列布局 -->
<wiy-form wiy:data-items="this.items" columns="6"></wiy-form>

<!-- 8列布局 -->
<wiy-form wiy:data-items="this.items" columns="8"></wiy-form>

<!-- 单列布局 -->
<wiy-form wiy:data-items="this.items" columns="1"></wiy-form>
```

### 标签对齐方式

```html
<!-- 左对齐（默认） -->
<wiy-form wiy:data-items="this.items" label-align="left"></wiy-form>

<!-- 居中对齐 -->
<wiy-form wiy:data-items="this.items" label-align="center"></wiy-form>

<!-- 右对齐 -->
<wiy-form wiy:data-items="this.items" label-align="right"></wiy-form>
```

### 操作按钮位置

```html
<!-- 左对齐（默认） -->
<wiy-form wiy:data-items="this.items" operations-pos="left"></wiy-form>

<!-- 居中对齐 -->
<wiy-form wiy:data-items="this.items" operations-pos="center"></wiy-form>

<!-- 右对齐 -->
<wiy-form wiy:data-items="this.items" operations-pos="right"></wiy-form>
```

### 表单验证

```javascript
const form = this.getElement('myForm');
const error = form.validate();
if (error) {
    console.log('验证失败:', error.info);
} else {
    console.log('验证通过');
}
```

### 支持的表单控件类型

```javascript
export default {
    data: {
        items: [
            { type: 'input', name: 'input', label: '输入框' },
            { type: 'textarea', name: 'textarea', label: '文本域' },
            { type: 'radio-group', name: 'radio', label: '单选框' },
            { type: 'checkbox-group', name: 'checkbox', label: '复选框' },
            { type: 'select', name: 'select', label: '下拉选择' },
            { type: 'rate', name: 'rate', label: '评分' },
            { type: 'cascader', name: 'cascader', label: '级联选择' },
            { type: 'file-picker', name: 'file', label: '文件选择' },
            { type: 'editor', name: 'editor', label: '富文本编辑器' },
            { type: 'button', name: 'button', label: '按钮', text: '点击' },
            { type: 'form', name: 'subform', label: '子表单', items: [] },
        ],
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| columns | number | 2 | 表单列数，可选值：1、2、4、6、8 |
| label-align | string | 'left' | 标签对齐方式，可选值：`left`、`center`、`right` |
| operations-pos | string | 'left' | 操作按钮位置，可选值：`left`、`center`、`right` |
| disabled | boolean | false | 表单是否禁用 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | '' | 表单标题 |
| desc | string | '' | 表单描述 |
| items | array | [] | 表单项配置数组 |
| operations | array | [] | 操作按钮配置数组 |
| data | object | {} | 表单数据对象（支持 Data 绑定） |
| deleteDataOnItemDestroy | boolean | true | 项目销毁时是否删除对应数据 |

### 表单项配置 (items)

| 属性名 | 类型 | 说明 |
|--------|------|------|
| name | string | 字段名（必填） |
| label | string | 标签文本 |
| type | string | 控件类型（见支持的表单控件类型） |
| required | boolean | 是否必填 |
| data | object | 控件数据配置 |
| attr | object | 控件属性配置 |
| style | object | 控件样式配置 |
| multiple | boolean | 是否支持多值（数组） |
| isGroup | boolean | 是否为分组标签 |
| newline | boolean | 是否换行 |
| isHtml | boolean | 是否渲染 HTML |
| disabled | boolean | 是否禁用 |
| when | function | 条件渲染函数 (form, item) => boolean |
| onchange | function | 变化事件 (form, item) => void |
| ondestroy | function | 销毁事件 (form, item) => void |
| onfileclick | function | 文件点击事件 (form, item, file) => void |
| onclick | function | 点击事件 (form, item) => void |

### 操作按钮配置 (operations)

| 属性名 | 类型 | 说明 |
|--------|------|------|
| name | string | 按钮文本（必填） |
| theme | string | 按钮主题 |
| icon | string | 按钮图标 |
| style | object | 按钮样式配置 |
| when | function | 条件渲染函数 (form, operation) => boolean |
| onclick | function | 点击事件 (form, operation) => void |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| value-{{name}} | 对应类型的默认控件 | 字段值自定义插槽，name 为字段名 |
| value-{{name}}-{{index}} | 对应类型的默认控件 | 多值字段的自定义插槽，name 为字段名，index 为索引 |

### 自定义表单控件

```html
<wiy-form wiy:data-items="this.items" wiy:data-data="this.formData">
    <template slot="value-custom-field">
        <div style="display: flex; gap: 8px;">
            <wiy-input wiy:data-text="this.formData.customField"></wiy-input>
            <wiy-button theme="primary" wiy:onclick="this.handleCustomClick">
                自定义操作
            </wiy-button>
        </div>
    </template>
</wiy-form>
```

## 事件 event

本组件通过 `operations` 数组中的 `onclick` 事件处理操作按钮逻辑。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getItems() | 无 | array | 获取当前表单项 |
| getOperations() | 无 | array | 获取当前操作按钮 |
| getData() | 无 | object | 获取当前表单数据 |
| validate() | 无 | object\|undefined | 验证表单，返回错误信息或 undefined（通过） |

### 验证方法示例

```javascript
const form = this.getElement('myForm');
const error = form.validate();
if (error) {
    console.log('验证失败:', error);
    this.getApp().showMessage({
        theme: 'error',
        content: error.info,
    });
} else {
    console.log('表单数据:', form.actualData);
}
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Form 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-form-label-color: #666;
    --wiy-form-desc-color: #666;
    --wiy-form-desc-border-color: #e0e0e0;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-grid | 用于布局表单网格 |
| 组件 | wiy-pre | 用于显示文本内容 |
| 组件 | wiy-flex | 用于布局操作按钮和图标 |
| 组件 | wiy-link | 用于添加/删除多值字段 |
| 组件 | wiy-icon | 用于显示操作图标 |
| 组件 | wiy-input | 输入框控件 |
| 组件 | wiy-textarea | 文本域控件 |
| 组件 | wiy-radio-group | 单选框控件 |
| 组件 | wiy-checkbox-group | 复选框控件 |
| 组件 | wiy-select | 选择框控件 |
| 组件 | wiy-file-picker | 文件选择控件 |
| 组件 | wiy-rate | 评分控件 |
| 组件 | wiy-cascader | 级联选择控件 |
| 组件 | wiy-editor | 富文本控件 |
| 组件 | wiy-button | 按钮控件 |

## 注意事项

1. 表单项 `name` 属性必须唯一，用于数据绑定
2. 组件支持动态表单配置，`items` 数据变化会自动更新 DOM
3. `operations` 数组支持 `when` 条件判断，实现动态显示/隐藏按钮
4. `data` 数据会自动与表单控件双向绑定
5. `type="form"` 允许嵌套子表单，但不支持多层无限嵌套
6. 多值字段（multiple）支持动态添加/删除输入框
7. `validate()` 方法会递归验证嵌套表单
8. 标签对齐方式会影响所有表单项，不支持单独配置
