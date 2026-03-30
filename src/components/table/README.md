# Table 表格组件

## 简介

Table 组件是 wiy-ui 组件库中用于展示数据表格的核心组件，支持虚拟滚动、自定义列、行点击、操作列等功能，适用于各种数据展示场景。

## 用法

### 基础用法

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: '姓名', value: 'name' },
            { name: '年龄', value: 'age' },
            { name: '邮箱', value: 'email' },
        ],
        tableData: [
            { name: '张三', age: 28, email: 'zhangsan@example.com' },
            { name: '李四', age: 32, email: 'lisi@example.com' },
        ],
    },
};
```

### 自定义单元格值

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: '姓名', value: 'name' },
            {
                name: '状态',
                value: (comp, row) => row.status === 1 ? '启用' : '禁用',
            },
        ],
        tableData: [
            { name: '张三', status: 1 },
            { name: '李四', status: 0 },
        ],
    },
};
```

### 操作列

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData"
    wiy:data-operations="this.operations">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: '姓名', value: 'name' },
            { name: '年龄', value: 'age' },
        ],
        tableData: [
            { name: '张三', age: 28, id: 1 },
            { name: '李四', age: 32, id: 2 },
        ],
        operations: (comp, row) => [
            {
                name: '编辑',
                onclick: () => comp.editRow(row),
            },
            {
                name: '删除',
                onclick: () => comp.deleteRow(row),
            },
        ],
    },
    methods: {
        editRow(row) {
            console.log('编辑行', row);
        },
        deleteRow(row) {
            console.log('删除行', row);
        },
    },
};
```

### 行点击事件

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData"
    wiy:data-onrowclick="this.onRowClick">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: '姓名', value: 'name' },
            { name: '年龄', value: 'age' },
        ],
        tableData: [
            { name: '张三', age: 28 },
            { name: '李四', age: 32 },
        ],
        onRowClick: (comp, row, rowIndex) => {
            console.log('点击了行', rowIndex, row);
        },
    },
};
```

### 虚拟滚动（大数据量）

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData"
    wiy:data-virtual="this.virtualConfig">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: 'ID', value: 'id' },
            { name: '姓名', value: 'name' },
            { name: '数值', value: 'value' },
        ],
        tableData: [],
        virtualConfig: {
            enabled: true,
            rowHeight: 64,
            columnWidth: 200,
            rowBufferCount: 5,
            columnBufferCount: 2,
        },
    },
    lifecycle: {
        mount() {
            // 生成大量数据
            this.tableData = Array.from({ length: 10000 }, (_, i) => ({
                id: i + 1,
                name: `用户${i + 1}`,
                value: Math.random() * 1000,
            }));
        },
    },
};
```

### 自定义插槽

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData">
    <wiy-button slot="r-0-c-1" theme="primary">
        自定义按钮
    </wiy-button>
</wiy-table>
```

## 属性 attr

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| columns | array | [] | 列配置数组，每个元素包含 name、value 等属性（支持 Data 绑定） |
| data | array | [] | 表格数据数组（支持 Data 绑定） |
| operations | array/function | undefined | 操作列配置，支持数组或函数返回数组（支持 Data 绑定） |
| start-row-number | number | 1 | 起始行号（支持 Data 绑定） |
| onrowclick | function | undefined | 行点击回调函数（支持 Data 绑定） |

## 数据 data

| 数据名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| columns | array | [] | 列配置数据（支持 Data 绑定） |
| data | array | [] | 表格数据（支持 Data 绑定） |
| operations | array/function | undefined | 操作列配置（支持 Data 绑定） |
| startRowNumber | number | 1 | 起始行号（支持 Data 绑定） |
| onrowclick | function | undefined | 行点击回调函数（支持 Data 绑定） |
| virtual | object | { enabled: false } | 虚拟滚动配置对象 |

## 插槽 slot

| 插槽名 | 默认内容 | 说明 |
|--------|----------|------|
| default | 无 | 默认插槽，未使用 |
| r-{rowIndex}-c-{columnIndex} | 单元格值 | 单元格自定义插槽，rowIndex 和 columnIndex 为索引 |

### 插槽使用示例

```html
<wiy-table wiy:data-columns="this.columns" wiy:data-data="this.tableData">
    <!-- 自定义第0行第1列的内容 -->
    <template slot="r-0-c-1" wiy:data="slotData">
        <wiy-tag>{{slotData.item}}</wiy-tag>
    </template>
</wiy-table>
```

## 事件 event

| 事件名 | 触发时机 | 回调参数 | 说明 |
|--------|----------|----------|------|
| - | - | - | 本组件未直接暴露事件，通过 onrowclick 配置行点击 |

### 行点击事件配置示例

```html
<wiy-table
    wiy:data-columns="this.columns"
    wiy:data-data="this.tableData"
    wiy:data-onrowclick="this.handleRowClick">
</wiy-table>
```

```javascript
export default {
    data: {
        columns: [
            { name: '姓名', value: 'name' },
        ],
        tableData: [
            { name: '张三' },
        ],
        handleRowClick: (comp, row, rowIndex) => {
            console.log('行被点击', row, rowIndex);
        },
    },
};
```

## 实例函数 method

| 函数名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| getColumns | - | Promise&lt;array&gt; | 获取列配置数据（异步） |
| getData | - | Promise&lt;array&gt; | 获取表格数据（异步） |
| getOperations | row | array | 获取指定行的操作配置 |
| getItem | row, rowIndex, column, columnIndex | any | 获取单元格值 |
| needShowColumn | column | boolean | 判断列是否需要显示 |

### 实例函数使用示例

```javascript
// 在组件中获取 table 实例
const tableComp = this.getElement('myTable');
// 获取数据
tableComp.getData().then(data => {
    console.log('表格数据', data);
});
```

## 全局函数 global method

本组件未注册全局函数。

## 样式 style

Table 组件支持通过 CSS 变量调整样式：

```css
:root {
    /* 表格边框颜色 */
    --wiy-table-border-color: #e7e7e7;

    /* 表头颜色 */
    --wiy-table-header-color: #f5f5f5;
    --wiy-table-header-text-color: #333;

    /* 序号列文字颜色 */
    --wiy-table-number-text-color: #999;
}
```

## 依赖

| 类型 | 名称 | 说明 |
|------|------|------|
| 组件 | wiy-checkbox | 用于显示复选框列 |
| 组件 | wiy-dropdown | 用于操作列下拉菜单 |
| 组件 | wiy-menus | 用于操作列菜单 |
| 组件 | wiy-empty | 用于空数据状态显示 |

## 注意事项

1. columns 数组中每个元素支持以下属性：
   - name: 列标题
   - value: 数据字段名或取值函数
   - style: 列样式对象
   - valueStyle: 单元格样式对象
   - isHtml: 是否渲染为 HTML
   - when: 条件渲染函数，返回 false 则不显示该列
   - defaultValue: 默认值

2. 虚拟滚动配置对象包含以下属性：
   - enabled: 是否启用虚拟滚动
   - rowHeight: 行高（像素）
   - columnWidth: 列宽（像素）
   - rowBufferCount: 行缓冲区数量
   - columnBufferCount: 列缓冲区数量

3. 行点击事件在点击复选框列或操作列时不会触发
4. 使用自定义插槽时，插槽数据包含：row、column、rowIndex、columnIndex、item
5. 大数据量时建议启用虚拟滚动以提升性能
