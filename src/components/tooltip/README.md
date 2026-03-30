# Tooltip 文字提示组件

## 简介

Tooltip 组件是 wiy-ui 组件库中用于显示文字提示的组件，当鼠标悬停在元素上时显示提示信息，基于 Popover 组件实现，适用于需要额外说明的场景。

## 用法

### 基础用法

```html
<wiy-tooltip text="这是提示文字">
    <wiy-button>悬停查看提示</wiy-button>
</wiy-tooltip>
```

### 数据绑定

```html
<wiy-tooltip
    wiy:data-text="this.tooltipText">
    <wiy-button>悬停查看提示</wiy-button>
</wiy-tooltip>
```

```javascript
export default {
    data: {
        tooltipText: '动态绑定的提示文字',
    },
};
```

### 多行提示

```html
<wiy-tooltip text="第一行提示文字&#10;第二行提示文字&#10;第三行提示文字">
    <wiy-button>多行提示</wiy-button>
</wiy-tooltip>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | - | 提示文字内容（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | string | undefined | 提示文字内容（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 需要添加提示的目标元素 |

### 插槽使用示例

```html
<wiy-tooltip text="点击此按钮提交表单">
    <wiy-button theme="primary">
        <wiy-icon name="check"></wiy-icon>
        提交
    </wiy-button>
</wiy-tooltip>
```

## 事件 event

本组件未直接暴露事件，事件处理由底层 Popover 组件处理。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Tooltip 组件的样式基于 Popover 组件，可通过 Popover 组件的 CSS 变量进行调整。

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-popover | 弹出层组件，用于显示提示内容 |
| 组件 | wiy-pre | 预格式化文本组件，用于显示提示文字 |

## 注意事项

1. Tooltip 组件必须包裹一个目标元素，鼠标悬停在该元素上时显示提示
2. 提示文字支持换行，使用 `&#10;` 作为换行符
3. text 属性优先级高于 data 中的 text 数据
4. 提示框位置跟随鼠标位置显示
5. 提示文字会自动保留空白和换行格式（由 wiy-pre 组件处理）
6. 组件依赖 wiy-popover 和 wiy-pre 组件，使用前需确保已注册
