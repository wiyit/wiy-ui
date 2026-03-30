# Menus 菜单组件

## 简介

Menus 组件是 wiy-ui 组件库中用于创建层级菜单的组件，支持无限级嵌套菜单、自定义图标、激活状态管理和展开/收起动画。适用于导航菜单、侧边栏菜单等场景。

## 用法

### 基础用法

```html
<wiy-menus wiy:data-items="this.menus"></wiy-menus>
```

```javascript
export default {
    data: {
        menus: [
            {
                name: '首页',
                onclick: (that, menu) => {
                    console.log('点击首页');
                }
            },
            {
                name: '产品',
                icon: 'product',
                sub: [
                    {
                        name: '产品1',
                        onclick: (that, menu) => {
                            console.log('点击产品1');
                        }
                    },
                    {
                        name: '产品2',
                        onclick: (that, menu) => {
                            console.log('点击产品2');
                        }
                    }
                ]
            },
            {
                name: '关于我们',
                onclick: (that, menu) => {
                    console.log('点击关于我们');
                }
            }
        ]
    }
};
```

### 自定义菜单内容

```html
<wiy-menus wiy:data-items="this.menus">
    <template wiy:slot="item-0">
        <span style="color: blue;">{{item}}</span>
    </template>
    <template wiy:slot="item-1">
        <span style="color: green;">{{item}}</span>
    </template>
</wiy-menus>
```

### 动态菜单数据

```javascript
export default {
    data: {
        menus: [],
    },
    lifecycle: {
        async init() {
            // 从API获取菜单数据
            const response = await fetch('/api/menus');
            this.menus = await response.json();
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| level | number | 0 | 菜单层级，用于嵌套菜单的缩进控制 |
| items | array | [] | 菜单数据（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | array | [] | 菜单数据（支持 Data 绑定） |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| item-{{index}} | {{item}} | 菜单项自定义内容插槽，index 为菜单在数组中的索引 |

## 事件 event

本组件通过菜单数据中的 `onclick` 方法处理点击事件，无单独的事件定义。

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getItems() | 无 | array | 获取菜单数据 |
| getLevel() | 无 | number | 获取当前菜单层级 |
| getItem(menu) | menu: 菜单数据对象 | any | 获取菜单显示文本 |
| isOpened(menu) | menu: 菜单数据对象 | boolean | 检查菜单是否展开 |
| isActive(menu) | menu: 菜单数据对象 | boolean | 检查菜单是否激活 |
| isSubActive(menu) | menu: 菜单数据对象 | boolean | 检查子菜单是否有激活项 |
| needShow(menu) | menu: 菜单数据对象 | boolean | 检查菜单是否需要显示 |
| onItemClick(menu) | menu: 菜单数据对象 | 无 | 菜单项点击事件处理 |
| onAngleClick(e, menu) | e: 事件对象, menu: 菜单数据对象 | 无 | 展开/收起按钮点击事件处理 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Menus 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 菜单项样式 */
    --wiy-menus-item-color-hover: #f0f0f0;
    --wiy-menus-item-color-active: #e6f7ff;
    --wiy-menus-item-text-color-active: #1890ff;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-flex | 用于菜单布局 |
| 组件 | wiy-icon | 用于显示菜单图标和展开/收起指示器 |

## 注意事项

1. 菜单数据支持无限级嵌套，但建议控制在合理层级内以避免性能问题
2. 菜单项的 `onclick` 方法会接受 `that`（组件实例）和 `menu`（菜单数据）两个参数
3. 菜单的 `isActive` 方法用于自定义激活状态判断逻辑
4. 菜单的 `when` 方法用于自定义显示/隐藏逻辑
5. 菜单项支持自定义图标（`icon` 属性）或 HTML 内容（`iconHtml` 属性）
