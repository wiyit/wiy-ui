# Cascader 级联选择组件

## 简介

Cascader 组件是 wiy-ui 组件库中的级联选择组件，支持无限层级嵌套，适用于地址选择、分类选择等场景。

## 用法

### 基础用法

```html
<wiy-cascader wiy:data-options="this.cascaderOptions" wiy:data-data="this.selectedData"></wiy-cascader>
```

```javascript
export default {
    data: {
        cascaderOptions: [
            {
                value: '1',
                label: '一级分类1',
                sub: [
                    {
                        value: '1-1',
                        label: '二级分类1-1',
                        sub: [
                            { value: '1-1-1', label: '三级分类1-1-1' },
                            { value: '1-1-2', label: '三级分类1-1-2' },
                        ],
                    },
                    { value: '1-2', label: '二级分类1-2' },
                ],
            },
            {
                value: '2',
                label: '一级分类2',
                sub: [
                    { value: '2-1', label: '二级分类2-1' },
                ],
            },
        ],
        selectedData: [],
    },
};
```

### 带提示文本

```html
<wiy-cascader wiy:data-options="this.cascaderOptions" wiy:data-data="this.selectedData" wiy:data-prompts="['请选择一级分类', '请选择二级分类', '请选择三级分类']"></wiy-cascader>
```

### 无提示文本

```html
<wiy-cascader no-prompt wiy:data-options="this.cascaderOptions" wiy:data-data="this.selectedData"></wiy-cascader>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| level | number | 0 | 级联层级，内部使用，用户无需设置 |
| no-prompt | boolean | false | 是否显示提示文本 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | Array | [] | 级联选择数据源，支持无限层级嵌套 |
| data | Array | [] | 选中的数据数组，每个元素对应一级的选中值 |
| prompts | Array | [] | 各级选择框的提示文本 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中值改变时 | { data: 当前选中数据数组 } | 选择改变事件 |
| datainit | 数据初始化时 | { data: 当前选中数据数组 } | 数据初始化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getOptions | 无 | Promise<Array> | 获取当前级别的选项（响应式） |
| getLevel | 无 | number | 获取当前层级 |
| getSubOptions | 无 | Array | 获取下一级的选项 |
| onSelectChange | 无 | 无 | 选择改变时的处理函数 |
| onSubChange | 无 | 无 | 子级选择改变时的处理函数 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Cascader 组件的默认样式：

```css
:host {
    display: flex;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-select | 用于显示各级选择框 |
| 组件 | wiy-cascader | 递归使用自身实现无限层级 |

## 注意事项

1. 选项数据 `options` 必须是数组类型，每个项需包含 `value`（值）、`label`（标签）和可选的 `sub`（子级选项）属性
2. 选中数据 `data` 是一个数组，每个元素对应一级的选中值
3. 组件会根据选择自动加载下一级的选项
4. 支持动态更新 `options` 和 `data` 数据
5. 提示文本 `prompts` 数组长度应与级联层数匹配
