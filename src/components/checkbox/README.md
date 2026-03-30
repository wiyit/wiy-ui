# Checkbox 复选框组件

## 简介

Checkbox 组件是 wiy-ui 组件库中的复选框组件，支持选中/未选中状态切换，提供标签展示和事件监听功能。

## 用法

### 基础用法

```html
<wiy-checkbox wiy:data-checked="this.isChecked" wiy:onchange="this.onChange"></wiy-checkbox>
```

```javascript
export default {
    data: {
        isChecked: false,
    },
    methods: {
        onChange({ checked }) {
            console.log('复选框状态:', checked);
        },
    },
};
```

### 带标签

```html
<!-- 使用属性设置标签 -->
<wiy-checkbox label="同意条款" wiy:data-checked="this.isChecked"></wiy-checkbox>

<!-- 使用插槽设置标签 -->
<wiy-checkbox wiy:data-checked="this.isChecked">
    我同意用户协议和隐私政策
</wiy-checkbox>
```

### 禁用状态

```html
<wiy-checkbox label="禁用复选框" wiy:data-checked="true" disabled></wiy-checkbox>
```

### Data 绑定

```html
<wiy-checkbox label="双向绑定" wiy:data-checked="this.isChecked"></wiy-checkbox>
<button wiy:onclick="this.toggleChecked">切换状态</button>
```

```javascript
export default {
    data: {
        isChecked: false,
    },
    methods: {
        toggleChecked() {
            this.isChecked = !this.isChecked;
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| label | string | - | 复选框标签文本 |
| disabled | boolean | false | 是否禁用复选框 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| checked | boolean | false | 复选框选中状态（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 复选框标签插槽，优先级高于 label 属性 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中状态改变时 | { checked: 新状态 } | 复选框状态变化事件 |
| datainit | 数据初始化时 | { checked: 初始状态 } | 数据初始化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| onInputChange | 无 | 无 | 内部处理函数，监听输入框变化 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Checkbox 组件默认样式：

```css
:host {
    display: flex;
    align-items: center;

    input {
        width: 16px;
        height: 16px;
        cursor: pointer;
        margin: 0;

        &:focus {
            outline: 1px solid rgb(1, 204, 255);
        }
    }

    label {
        cursor: pointer;
        padding-left: 6px;
    }
}
```

## 依赖

本组件无外部依赖。

## 注意事项

1. 复选框标签支持通过属性或插槽设置，插槽优先级更高
2. 支持 Data 绑定，通过 `wiy:data-checked` 实现双向绑定
3. 禁用状态下复选框不可点击，但仍可通过 Data 绑定修改状态
4. 点击标签会触发复选框状态切换
5. 支持键盘操作，可通过 Tab 键聚焦，Enter 键切换状态
