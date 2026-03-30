# Steps 步骤组件

## 简介

Steps 组件是 wiy-ui 组件库中的导航组件，用于展示流程步骤，支持水平和垂直布局，提供完成、当前、未完成等状态的视觉反馈。

## 用法

### 基础用法

```html
<wiy-steps wiy:data-items="this.steps" wiy:data-current="this.currentStep"></wiy-steps>
```

```javascript
export default {
    data: {
        currentStep: 0,
        steps: [
            { name: '步骤1', info: '完成' },
            { name: '步骤2', info: '进行中' },
            { name: '步骤3', info: '未开始' },
        ],
    },
};
```

### 垂直布局

```html
<wiy-steps v wiy:data-items="this.steps" wiy:data-current="this.currentStep"></wiy-steps>
```

### 自定义步骤内容

```html
<wiy-steps wiy:data-items="this.steps" wiy:data-current="this.currentStep">
    <template slot="content-0">
        <div class="custom-step-content">
            <strong>第一步：</strong>填写基本信息
        </div>
    </template>
    <template slot="content-1">
        <div class="custom-step-content">
            <strong>第二步：</strong>验证身份
        </div>
    </template>
    <template slot="content-2">
        <div class="custom-step-content">
            <strong>第三步：</strong>完成注册
        </div>
    </template>
</wiy-steps>
```

### 步骤点击事件

```html
<wiy-steps wiy:data-items="this.steps" wiy:data-current="this.currentStep" wiy:onchange="this.handleStepChange"></wiy-steps>
```

```javascript
export default {
    data: {
        currentStep: 0,
        steps: [
            { name: '步骤1' },
            { name: '步骤2' },
            { name: '步骤3' },
        ],
    },
    methods: {
        handleStepChange(event) {
            console.log('当前步骤:', event.current);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| v | boolean | false | 是否垂直布局（存在即生效） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| current | number | 0 | 当前步骤索引（支持 Data 绑定） |
| items | array | [] | 步骤数据数组（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| content-{{index}} | 默认步骤内容 | 第 index 步的自定义内容插槽 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 步骤变化时 | { current: number } | 步骤改变事件 |
| datainit | 组件初始化时 | { current: number } | 组件初始化完成事件 |

### 事件监听示例

```html
<wiy-steps wiy:data-items="this.steps" wiy:data-current="this.current" wiy:onchange="this.onStepChange"></wiy-steps>
```

```javascript
export default {
    data: {
        current: 0,
        steps: [
            { name: '步骤1' },
            { name: '步骤2' },
            { name: '步骤3' },
        ],
    },
    methods: {
        onStepChange(event) {
            console.log('步骤切换到:', event.current);
        },
    },
};
```

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Steps 组件支持通过 CSS 变量调整样式：

```css
:root {
    --wiy-steps-indicator-color: #d0d0d0;
    --wiy-steps-indicator-color-finish: #52c41a;
    --wiy-steps-indicator-color-active: #1890ff;
    --wiy-steps-name-color: #666;
    --wiy-steps-name-color-finish: #333;
    --wiy-steps-name-color-active: #1890ff;
    --wiy-steps-info-color: #999;
    --wiy-steps-info-color-finish: #666;
    --wiy-steps-info-color-active: #1890ff;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于布局步骤 |
| 组件 | wiy-pre | 用于显示步骤信息 |

## 注意事项

1. 步骤索引从 0 开始
2. 步骤数据 items 支持动态更新
3. 点击未完成的步骤会触发 change 事件
4. 组件会在初始化时触发 `datainit` 事件
5. 垂直布局通过 `v` 属性实现，无需设置值
6. 每个步骤的名称和信息支持自定义内容
