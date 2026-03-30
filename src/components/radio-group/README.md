# Radio-Group 单选框组组件

## 简介

Radio-Group 组件是 wiy-ui 组件库中的表单组件，用于管理一组单选框，实现完整的单选功能，支持自定义选项和"其他"选项。

## 用法

### 基础用法

```html
<wiy-radio-group wiy:data-options="this.options" wiy:data-data="this.selected"></wiy-radio-group>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
            { label: '选项3', value: '3' },
        ],
        selected: '1',
    },
};
```

### 禁用选项

```html
<wiy-radio-group wiy:data-options="this.options"></wiy-radio-group>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2', disabled: true },
            { label: '选项3', value: '3' },
        ],
    },
};
```

### 允许"其他"选项

```html
<wiy-radio-group allow-other wiy:data-options="this.options" wiy:data-data="this.selected"></wiy-radio-group>
```

### 自定义"其他"选项输入框

```html
<wiy-radio-group allow-other wiy:data-options="this.options" wiy:data-data="this.selected">
    <template slot="other" wiy:let-value="value" wiy:let-set-value="setValue">
        <wiy-input placeholder="请输入其他内容" wiy:data-text="value" wiy:onchange="e => setValue(e.data.text)"></wiy-input>
    </template>
</wiy-radio-group>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| allow-other | boolean | false | 是否允许"其他"选项 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | array | [] | 选项数组（支持 Data 绑定） |
| data | any | undefined | 选中的值（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| other | wiy-input | "其他"选项的自定义输入组件 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中值变化时 | { data: any } | 选中值改变事件 |
| datainit | 组件初始化时 | { data: any } | 组件初始化完成事件 |

### 事件监听示例

```html
<wiy-radio-group wiy:data-options="this.options" wiy:onchange="this.handleChange"></wiy-radio-group>
```

```javascript
export default {
    data: {
        options: [
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
        ],
    },
    methods: {
        handleChange(event) {
            console.log('选中值:', event.data);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Radio-Group 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 可根据需要添加自定义样式变量 */
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于布局选项 |
| 组件 | wiy-input | 默认"其他"选项输入框 |

## 注意事项

1. 组件支持选项数组动态更新
2. "其他"选项的值会与正常选项值区分处理
3. 禁用的选项不会响应点击事件
4. 组件会在初始化时触发 `datainit` 事件
