# Popover 弹出框组件

## 简介

Popover 组件是 wiy-ui 组件库中用于创建弹出提示框的组件，支持鼠标悬停显示、多种定位方式和跟随鼠标位置。适用于提示信息、详情预览、工具提示等场景。

## 用法

### 基础用法

```html
<wiy-popover>
    <span>鼠标悬停这里</span>
    <template wiy:slot="content">
        这是弹出框的内容
    </template>
</wiy-popover>
```

### 不同定位方式

```html
<!-- 顶部（默认） -->
<wiy-popover popover-pos="top">
    <wiy-button>顶部弹出</wiy-button>
    <template wiy:slot="content">
        弹出框在顶部显示
    </template>
</wiy-popover>

<!-- 底部 -->
<wiy-popover popover-pos="bottom">
    <wiy-button>底部弹出</wiy-button>
    <template wiy:slot="content">
        弹出框在底部显示
    </template>
</wiy-popover>

<!-- 左侧 -->
<wiy-popover popover-pos="left">
    <wiy-button>左侧弹出</wiy-button>
    <template wiy:slot="content">
        弹出框在左侧显示
    </template>
</wiy-popover>

<!-- 跟随鼠标 -->
<wiy-popover popover-pos="mouse">
    <wiy-button>跟随鼠标</wiy-button>
    <template wiy:slot="content">
        弹出框跟随鼠标移动
    </template>
</wiy-popover>
```

### 自定义弹出内容

```html
<wiy-popover popover-pos="bottom">
    <wiy-button>用户信息</wiy-button>
    <template wiy:slot="content">
        <wiy-flex v g="8px" style="padding: 8px;">
            <div><strong>用户名：</strong>张三</div>
            <div><strong>邮箱：</strong>zhangsan@example.com</div>
            <div><strong>角色：</strong>管理员</div>
        </wiy-flex>
    </template>
</wiy-popover>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| popover-pos | string | 'top' | 弹出框位置，可选值：`top`、`bottom`、`left`、`mouse` |
| visible | boolean | false | 弹出框可见性（内部属性） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| visible | boolean | false | 弹出框可见性（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 源内容插槽，鼠标悬停时显示弹出框 |
| content | 无 | 弹出框内容插槽 |

## 事件 event

本组件无单独事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| onMouseenter(e) | e: 鼠标事件对象 | 无 | 鼠标进入事件处理 |
| onMouseleave(e) | e: 鼠标事件对象 | 无 | 鼠标离开事件处理 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Popover 组件支持通过 CSS 自定义样式：

```css
wiy-popover {
    /* 自定义弹出框最大宽度 */
}

/* 自定义弹出框内容样式 */
wiy-popover::part(popover) {
    max-width: 500px;
    padding: 12px;
}
```

## 依赖

本组件不依赖其他组件。

## 注意事项

1. 弹出框仅在鼠标未按下时显示和隐藏
2. 当设置 `popover-pos="mouse"` 时，弹出框会跟随鼠标移动
3. 弹出框内容最大宽度默认为 300px
4. 需要确保已定义 content 插槽，否则弹出框不会显示
5. 弹出框会自动根据边界情况调整位置，避免超出视窗
6. 组件使用 popover API 实现，需要浏览器支持
