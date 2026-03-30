# Carousel 轮播图组件

## 简介

Carousel 组件是 wiy-ui 组件库中的轮播图组件，支持自动播放、手动切换、响应式设计等功能，适用于展示图片、广告等内容。

## 用法

### 基础用法

```html
<wiy-carousel wiy:data-items="this.carouselItems"></wiy-carousel>
```

```javascript
export default {
    data: {
        carouselItems: [
            { type: 'image', src: 'https://example.com/image1.jpg', fit: 'cover' },
            { type: 'image', src: 'https://example.com/image2.jpg', fit: 'contain' },
            { type: 'image', src: 'https://example.com/image3.jpg', blurBackground: true },
        ],
    },
};
```

### 自动播放

```html
<wiy-carousel autoplay autoplay-interval="3000" autoplay-delay="1000" wiy:data-items="this.carouselItems"></wiy-carousel>
```

### 平滑滚动

```html
<wiy-carousel smooth wiy:data-items="this.carouselItems"></wiy-carousel>
```

### 自定义轮播项

```html
<wiy-carousel wiy:data-items="this.carouselItems">
    <template wiy:slot="item-0">
        <div style="width:100%; height:100%; background: linear-gradient(45deg, #ff6b6b, #feca57); display:flex; align-items:center; justify-content:center; color:white; font-size:24px;">
            自定义轮播项 1
        </div>
    </template>
    <template wiy:slot="item-1">
        <div style="width:100%; height:100%; background: linear-gradient(45deg, #48dbfb, #0abde3); display:flex; align-items:center; justify-content:center; color:white; font-size:24px;">
            自定义轮播项 2
        </div>
    </template>
</wiy-carousel>
```

```javascript
export default {
    data: {
        carouselItems: [
            { type: 'custom' },
            { type: 'custom' },
        ],
    },
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| autoplay | boolean | false | 是否自动播放 |
| autoplay-interval | number | 4000 | 自动播放间隔（毫秒） |
| autoplay-delay | number | 0 | 自动播放延迟（毫秒） |
| smooth | boolean | false | 是否启用平滑滚动 |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | Array | [] | 轮播图数据数组 |
| active | number | 0 | 当前激活的轮播项索引 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| item-{{index}} | 图片展示 | 自定义轮播项内容，索引从 0 开始 |

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| change | 轮播项切换时 | { active: 当前索引 } | 轮播项改变事件 |
| datainit | 数据初始化时 | { active: 当前索引 } | 数据初始化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| goPrev | 无 | 无 | 切换到上一张 |
| goNext | 无 | 无 | 切换到下一张 |
| play | index（可选） | 无 | 开始自动播放，可指定初始索引 |
| pause | index（可选） | 无 | 暂停自动播放，可指定跳转索引 |
| autoplay | delay（可选） | 无 | 延迟自动播放 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Carousel 组件支持通过 CSS 变量调整样式，主要样式类：

```css
:host {
    display: block;

    #container {
        position: relative;
        width: 100%;
        height: 100%;

        #items {
            width: 100%;
            height: 100%;
            overflow: auto;
            scroll-snap-type: x mandatory;

            .item {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }

        #controls {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;

            .icon {
                position: absolute;
                font-size: 1.5em;
                color: white;
                background-color: rgba(80, 80, 80, 0.5);
                margin: 10px;
                padding: 6px;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}

:host([smooth]) {
    #container #items {
        scroll-behavior: smooth;
    }
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于布局轮播项和控制按钮 |
| 组件 | wiy-icon | 用于显示左右箭头图标 |
| 组件 | wiy-image | 用于展示图片内容 |

## 注意事项

1. 轮播图需要设置明确的宽高，否则可能无法正常显示
2. 图片轮播项需要提供 valid 的 src 属性
3. 自动播放会在鼠标悬停时暂停，离开时继续
4. 支持响应式设计，会根据容器大小自动调整
5. 轮播项切换时会自动平滑滚动（需要设置 smooth 属性）
