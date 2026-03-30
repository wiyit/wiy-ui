# Pagination 分页组件

## 简介

Pagination 组件是 wiy-ui 组件库中用于数据分页展示的组件，支持页码跳转、上一页/下一页导航、快速跳转和总条数显示。适用于表格数据分页、列表数据分页等场景。

## 用法

### 基础用法

```html
<wiy-pagination
    wiy:data-total="this.total"
    wiy:data-current="this.currentPage"
    wiy:data-page-size="this.pageSize">
</wiy-pagination>
```

```javascript
export default {
    data: {
        total: 100,
        currentPage: 1,
        pageSize: 10
    },
    methods: {
        init() {
            // 监听页码变化事件
            this.observe(() => {
                return this.currentPage;
            }, ({ result }) => {
                console.log('当前页码:', result);
                this.loadData(result);
            });
        },
        loadData(page) {
            // 加载数据逻辑
            console.log('加载第', page, '页数据');
        }
    }
};
```

### 数据变化时自动重置页码

```html
<wiy-pagination
    wiy:data-total="this.total"
    wiy:data-current="this.currentPage"
    wiy:data-page-size="this.pageSize">
</wiy-pagination>
```

```javascript
export default {
    data: {
        total: 0,
        currentPage: 1,
        pageSize: 10
    },
    methods: {
        async reloadData() {
            // 重新加载数据，total 变化时会自动重置 current 为 1
            const newTotal = await this.fetchTotal();
            this.total = newTotal; // 这会自动触发 current 重置为 1
        },
        async fetchTotal() {
            return 150; // 返回新的总数
        }
    }
};
```

### 处理分页变化事件

```html
<wiy-pagination
    wiy:data-total="this.total"
    wiy:data-current="this.currentPage"
    wiy:data-page-size="this.pageSize"
    wiy:onchange="this.onPageChange">
</wiy-pagination>
```

```javascript
export default {
    data: {
        total: 100,
        currentPage: 1,
        pageSize: 10
    },
    methods: {
        onPageChange(event) {
            const { total, current, pageSize } = event.detail;
            console.log('分页变化:', { total, current, pageSize });
            this.loadData(current, pageSize);
        },
        loadData(page, size) {
            // 加载数据
        }
    }
};
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| total | number | 0 | 总条数（支持 Data 绑定） |
| current | number | 1 | 当前页码（支持 Data 绑定） |
| pageSize | number | 10 | 每页显示条数（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| total | number | 0 | 总条数（支持 Data 绑定） |
| current | number | 1 | 当前页码（支持 Data 绑定） |
| pageSize | number | 10 | 每页显示条数（支持 Data 绑定） |
| items | array | [] | 分页按钮显示列表 |

## 插槽 slot

本组件无插槽定义。

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| datainit | 组件初始化时 | { total, current, pageSize } | 数据初始化事件 |
| change | 分页变化时 | { total, current, pageSize } | 分页变化事件 |

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| generateItems() | 无 | array | 生成分页按钮显示列表 |
| getPageCount() | 无 | number | 计算总页数 |

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Pagination 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 文本颜色 */
    --wiy-pagination-text-color: #666;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-button | 用于分页按钮 |
| 组件 | wiy-icon | 用于上一页/下一页和省略号图标 |
| 组件 | wiy-input | 用于快速跳转输入框 |

## 注意事项

1. 当 `total` 或 `pageSize` 变化时，`current` 会自动重置为 1
2. 分页组件默认显示最多 5 个连续页码按钮
3. 页码超出范围时会自动调整到有效范围内
4. 总页数少于等于 5 时，显示所有页码按钮
5. 快速跳转输入框支持直接输入页码并回车跳转
6. 使用 `change` 事件时可以通过 `event.detail` 获取分页信息
