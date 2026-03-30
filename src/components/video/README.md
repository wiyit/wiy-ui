# Video 视频组件

## 简介

Video 组件是 wiy-ui 组件库中用于播放视频的组件，支持视频播放、暂停、自动播放、循环播放等功能，基于原生 HTML5 Video 标签实现，提供简单易用的 API。

## 用法

### 基础用法

```html
<wiy-video
    src="https://example.com/video.mp4"
    poster="https://example.com/poster.jpg"
    controls>
</wiy-video>
```

### 自动播放

```html
<!-- 自动播放 -->
<wiy-video
    src="https://example.com/video.mp4"
    poster="https://example.com/poster.jpg"
    autoplay
    controls>
</wiy-video>

<!-- 延迟自动播放 -->
<wiy-video
    src="https://example.com/video.mp4"
    poster="https://example.com/poster.jpg"
    autoplay
    autoplay-delay="2000"
    controls>
</wiy-video>
```

### 循环播放

```html
<wiy-video
    src="https://example.com/video.mp4"
    poster="https://example.com/poster.jpg"
    controls
    loop>
</wiy-video>
```

### 填充方式

```html
<!-- 填充（默认） -->
<wiy-video src="https://example.com/video.mp4" fit="fill" controls></wiy-video>

<!-- 包含 -->
<wiy-video src="https://example.com/video.mp4" fit="contain" controls></wiy-video>

<!-- 覆盖 -->
<wiy-video src="https://example.com/video.mp4" fit="cover" controls></wiy-video>

<!-- 无缩放 -->
<wiy-video src="https://example.com/video.mp4" fit="none" controls></wiy-video>

<!-- 最小缩放 -->
<wiy-video src="https://example.com/video.mp4" fit="scale-down" controls></wiy-video>
```

### 块级显示

```html
<wiy-video
    src="https://example.com/video.mp4"
    block
    controls>
</wiy-video>
```

### 控制播放

```html
<wiy-video id="myVideo" src="https://example.com/video.mp4" poster="https://example.com/poster.jpg"></wiy-video>

<wiy-button wiy:onclick="this.play">播放</wiy-button>
<wiy-button wiy:onclick="this.pause">暂停</wiy-button>
<wiy-button wiy:onclick="this.setTime">跳转到 30 秒</wiy-button>
```

```javascript
export default {
    methods: {
        play() {
            const video = this.getElement('myVideo');
            video.play();
        },
        pause() {
            const video = this.getElement('myVideo');
            video.pause();
        },
        setTime() {
            const video = this.getElement('myVideo');
            video.setTime(30);
        },
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | - | 视频地址（支持 Data 绑定） |
| poster | string | - | 视频封面图地址（支持 Data 绑定） |
| controls | boolean | false | 是否显示视频控制条 |
| controlslist | string | - | 控制条功能列表（如：nodownload 禁止下载） |
| loop | boolean | false | 是否循环播放 |
| autoplay | boolean | false | 是否自动播放 |
| autoplay-delay | number | 0 | 自动播放延迟时间（毫秒） |
| fit | string | fill | 视频填充方式：`fill`（填充）、`contain`（包含）、`cover`（覆盖）、`none`（无缩放）、`scale-down`（最小缩放） |
| block | boolean | false | 是否块级显示 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | undefined | 视频地址（支持 Data 绑定） |
| poster | string | undefined | 视频封面图地址（支持 Data 绑定） |

## 插槽 slot

本组件不支持插槽。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| loadedmetadata | 视频元数据加载完成时 | - | 元数据加载事件 |
| ended | 视频播放结束时 | - | 播放结束事件 |
| timeupdate | 播放时间更新时 | - | 时间更新事件 |

### 事件监听示例

```html
<wiy-video
    src="https://example.com/video.mp4"
    poster="https://example.com/poster.jpg"
    controls
    wiy:onloadedmetadata="this.onLoaded"
    wiy:onended="this.onEnded"
    wiy:ontimeupdate="this.onTimeUpdate">
</wiy-video>
```

```javascript
export default {
    methods: {
        onLoaded() {
            console.log('视频元数据加载完成');
        },
        onEnded() {
            console.log('视频播放结束');
        },
        onTimeUpdate(e) {
            const video = e.currentTarget;
            console.log('播放时间:', video.currentTime);
        },
    },
};
```

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| play | time | - | 播放视频，time 可选，指定播放位置（秒） |
| pause | time | - | 暂停视频，time 可选，指定暂停位置（秒） |
| setTime | time | - | 设置播放时间（秒） |
| autoplay | delay | - | 自动播放，delay 可选，延迟时间（毫秒） |

### 实例函数使用示例

```javascript
const video = this.getElement('myVideo');

// 播放视频
video.play();

// 播放到指定位置
video.play(30);

// 暂停视频
video.pause();

// 暂停在指定位置
video.pause(60);

// 设置播放时间
video.setTime(45);

// 自动播放（延迟 1 秒）
video.autoplay(1000);
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Video 组件支持通过 CSS 变量调整样式，但主要样式由 HTML5 Video 标签控制。

```css
:root {
    /* 组件不直接暴露 CSS 变量 */
}
```

## 依赖

本组件不依赖其他组件，基于原生 HTML5 Video 标签实现。

## 注意事项

1. 视频地址 src 支持 Data 绑定，可动态切换视频源
2. 自动播放需要用户交互（除静音视频外），浏览器策略限制自动播放音频
3. autoplay 属性会在组件挂载后自动调用 autoplay 方法
4. autoplay-delay 属性控制自动播放的延迟时间
5. fit 属性控制视频在容器中的填充方式
6. block 属性使组件块级显示，占据父容器宽度
7. 组件会自动防止右键菜单（禁用视频下载）
8. 组件在卸载前会自动暂停视频播放
9. 视频源需要支持 CORS 才能正常播放
