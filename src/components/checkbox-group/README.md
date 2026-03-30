# Checkbox Group 复选框组组件

## 简介

Checkbox Group 组件是 wiy-ui 组件库中的复选框组组件，支持多选功能，提供选项管理、其他选项输入等功能。

## 用法

### 基础用法

```html
<wiy-checkbox-group wiy:data-options="this.groupOptions" wiy:data-data="this.selectedData" wiy:onchange="this.onChange"></wiy-checkbox-group>
```

```javascript
export default {
    data: {
        groupOptions: [
            { value: 'option1', label: '选项1' },
            { value: 'option2', label: '选项2' },
            { value: 'option3', label: '选项3' },
        ],
        selectedData: ['option1'],
    },
    methods: {
        onChange() {
            console.log('选中的数据:', this.selectedData);
        },
    },
};
```

### 允许其他选项

```html
<wiy-checkbox-group allow-other wiy:data-options="this.groupOptions" wiy:data-data="this.selectedData" wiy:onchange="this.onChange"></wiy-checkbox-group>
```

### 其他选项输入

```html
<wiy-checkbox-group allow-other wiy:data-options="this.groupOptions" wiy:data-data="this.selectedData" wiy:onchange="this.onChange"></wiy-checkbox-group>
```

```javascript
export default {
    data: {
        groupOptions: [
            { value: 'option1', label: '选项1' },
            { value: 'option2', label: '选项2' },
            { value: 'option3', label: '选项3' },
        ],
        selectedData: ['option1', '自定义选项'],
    },
    methods: {
        onChange() {
            console.log('选中的数据:', this.selectedData);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| allow-other | boolean | false | 是否允许选择"其他"选项 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | Array | [] | 复选框组选项数据 |
| data | Array | [] | 选中的数据数组 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 选中状态改变时 | { data: 选中数据数组 } | 选择变化事件 |
| datainit | 数据初始化时 | { data: 初始选中数据 } | 数据初始化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getOptions | 无 | Promise<Array> | 获取选项数据（响应式） |
| getOtherData | 无 | Array | 获取非预设选项的数据 |
| onInputChange | event, value | 无 | 处理复选框状态变化 |
| onOtherChange | event, otherData | 无 | 处理其他选项的变化 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Checkbox Group 组件默认样式：

```css
:host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 6px 20px;
    min-height: 32px;
    flex-wrap: wrap;

    .option {
        input {
            width: 16px;
            height: 16px;
            cursor: pointer;
            margin: 8px 0;
            flex-shrink: 0;

            &:focus {
                outline: 1px solid rgb(1, 204, 255);
            }
        }

        label {
            cursor: pointer;
            padding-left: 6px;
            width: max-content;
        }
    }

    #other {
        display: none;
    }
}

:host([allow-other]) {
    #other {
        display: flex;
    }
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于布局复选框项 |
| 组件 | wiy-input | 用于其他选项的输入框 |

## 注意事项

1. 选项数据 `options` 必须是数组类型，每个项需包含 `value`（值）和 `label`（标签）属性
2. `allow-other` 属性启用后，会显示"其他"选项和输入框
3. 选中数据 `data` 是数组类型，包含选中选项的 value 值
4. 其他选项的输入值会自动添加到选中数据中
5. 当取消选择"其他"选项时，输入值会从选中数据中移除
6. 支持通过 Data 绑定动态更新选项和选中状态
