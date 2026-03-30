# Button 按钮组件

## 简介

Button 组件是 wiy-ui 组件库中最基础的交互组件，用于触发用户交互操作，提供多种主题样式和状态支持。

## 用法

### 基础用法

```html
<wiy-button>按钮</wiy-button>
```

### 主题样式

```html
<!-- 主色调（默认） -->
<wiy-button theme="primary">主色调按钮</wiy-button>

<!-- 危险色调 -->
<wiy-button theme="danger">危险按钮</wiy-button>
```

### 带图标

```html
<!-- 左侧图标 -->
<wiy-button icon="check">确认</wiy-button>

<!-- 右侧图标（通过 slot 自定义） -->
<wiy-button>
    提交
    <wiy-icon name="arrow-right"></wiy-icon>
</wiy-button>
```

### 禁用状态

```html
<!-- 禁用按钮 -->
<wiy-button disabled>禁用</wiy-button>

<!-- 动态禁用 -->
<wiy-button wiy:attr-disabled="this.isDisabled">
    {{this.isDisabled ? '已禁用' : '可点击'}}
</wiy-button>
```

### Data 绑定

```html
<wiy-button wiy:data-disabled="this.isDisabled" wiy:onclick="this.handleClick">
    {{this.isDisabled ? '已禁用' : '点击我'}}
</wiy-button>
```

```javascript
export default {
    data: {
        isDisabled: false,
    },
    methods: {
        handleClick() {
            this.isDisabled = true;
            setTimeout(() => {
                this.isDisabled = false;
            }, 2000);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| theme | string | - | 按钮主题，可选值：`primary`（主色调）、`danger`（危险色调） |
| icon | string | - | 按钮左侧图标名称 |
| icon-prefix | string | - | 图标前缀，用于指定图标库（如：fas、far、fab） |
| icon-spin | boolean | false | 图标是否旋转（加载状态） |
| disabled | boolean | false | 按钮是否禁用（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| disabled | boolean | false | 按钮禁用状态内部数据（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 按钮内容插槽，用于插入按钮的文本或自定义内容 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| click | 按钮被点击时 | event | 点击事件 |

### 事件监听示例

```html
<wiy-button wiy:onclick="this.handleClick">点击我</wiy-button>
```

```javascript
export default {
    methods: {
        handleClick(event) {
            console.log('按钮被点击');
            console.log('事件对象:', event);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Button 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 基础按钮颜色 */
    --wiy-button-color: #f0f0f0;
    --wiy-button-text-color: #333;
    --wiy-button-color-hover: #e0e0e0;
    --wiy-button-color-active: #d0d0d0;

    /* 主色调按钮颜色 */
    --wiy-button-primary-color: #1890ff;
    --wiy-button-primary-text-color: #fff;
    --wiy-button-primary-color-hover: #40a9ff;
    --wiy-button-primary-color-active: #096dd9;

    /* 危险色调按钮颜色 */
    --wiy-button-danger-color: #ff4d4f;
    --wiy-button-danger-text-color: #fff;
    --wiy-button-danger-color-hover: #ff7875;
    --wiy-button-danger-color-active: #d93025;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-icon | 用于显示按钮图标 |

## 注意事项

1. 按钮内容支持插槽插入，但建议保持简洁
2. 图标按钮需要引入对应的图标库（如 Font Awesome）
3. 禁用状态下按钮不会响应点击事件
4. 组件依赖 wiy-icon 组件来显示图标
5. 支持与 wiy 框架的事件系统配合使用
