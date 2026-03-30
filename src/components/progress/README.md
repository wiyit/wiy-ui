# Progress 进度条组件

## 简介

Progress 组件是 wiy-ui 组件库中用于展示进度条的组件，基于 HTML `progress` 元素封装，支持自定义颜色、动态更新进度值和最大进度值，适用于文件上传、任务进度、加载状态等场景。

## 用法

### 基础用法

```html
<wiy-progress wiy:data-value="this.current" wiy:data-max="this.max"></wiy-progress>
```

```javascript
export default {
    data: {
        current: 50,
        max: 100
    }
};
```

### 属性方式设置值

```html
<wiy-progress value="30" max="100"></wiy-progress>
```

### 动态更新进度

```html
<wiy-progress wiy:data-value="this.progress" max="100">
    {{Math.round((this.progress / 100) * 100)}}%
</wiy-progress>
```

```javascript
export default {
    data: {
        progress: 0
    },
    lifecycle: {
        init() {
            // 模拟进度增长
            this.timer = setInterval(() => {
                if (this.progress < 100) {
                    this.progress += Math.random() * 10;
                    if (this.progress > 100) {
                        this.progress = 100;
                        clearInterval(this.timer);
                    }
                }
            }, 500);
        },
        unmount() {
            if (this.timer) {
                clearInterval(this.timer);
            }
        }
    }
};
```

### 自定义进度值显示

```html
<wiy-progress value="60" max="100">
    <template wiy:if="this.attr('value') >= 100">
        完成
    </template>
    <template wiy:if="this.attr('value') < 100">
        {{this.attr('value')}}% 完成
    </template>
</wiy-progress>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number | undefined | 当前进度值（支持 Data 绑定） |
| max | number | 100 | 最大进度值（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number | undefined | 当前进度值（支持 Data 绑定） |
| max | number | undefined | 最大进度值（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 自定义进度值显示内容插槽 |

## 事件 event

本组件无事件定义。

## 实例函数 method

本组件未提供公开实例函数。

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Progress 组件支持通过 CSS 自定义样式：

```css
wiy-progress {
    /* 自定义进度条宽度 */
    width: 100%;
}

/* 自定义进度条颜色 */
wiy-progress::part(progress) {
    background-color: #1890ff;
}

/* 自定义轨道颜色 */
wiy-progress::part(track) {
    background-color: #f0f0f0;
}
```

## 依赖

本组件不依赖其他组件。

## 注意事项

1. `value 属性优先级：data > value
2. 组件会自动处理值的边界，确保 value 在 0 到 max 之间
3. 当未设置 max 属性时，默认值为 100
4. 进度条颜色受浏览器默认样式影响，可通过 CSS 自定义
5. 支持自定义显示内容，如百分比、文字描述等
