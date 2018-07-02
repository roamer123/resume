## 布局

布局主要帮助我们快速搭建页面结构，划分区域，处理页面响应式。我们目前提供的页面布局是主要有页面的整体布局Layout和栅格系统布局Grid。

### Dbox UI 的 Grid 组件

目前提供的栅格系统是按照24等分原则进行划分的，采用的flex布局方法，你需要了解flex布局相关基础知识。

### Dbox UI 的 Layout 组件

Layout组件是用于页面整体布局的组件，提供Layout，Sider，Header，Content，Footer组件。

Layout作为容器组件，Sider，Header，Content，Footer使用时必须包含在Layout内，同时使用Sider时，如果需要配合其他Header, Content, Footer使用其他类型组件外层需要在包个Layout

## 路由和菜单

路由和菜单是组织起一个应用的关键骨架，我们的脚手架提供了一些基本的工具及模板，帮助你更方便的搭建自己的路由/菜单。

路由方面是基于 react-router@4 的实现，所以，在开始前你需要具备一些相关的基础知识。这里给出几篇关键文档：
[React Router 4 官方文档](https://reacttraining.com/react-router/web/guides/philosophy)
[Code Splitting](https://webpack.js.org/guides/code-splitting/)

### 基础结构

* **路由生成** 结合路由信息的配置文件和预设的基本算法，提供了在不同层级文件中自动生成路由列表的能力
  * 路由配置：`src/dashboard/Dashboard.jsx`
  * 路由生成文件：`src/router/`
* **菜单生成** 由确定数据结构的菜单配置文件生成，其中的菜单项名称，嵌套路径与路由有一定关联关系
  * 菜单配置文件：`src/dashboard/getMenuData.jsx`
  * 菜单组件：`src/component/sider-menu`

### 路由

* 顶层路由：`src/App.jsx`
* 菜单路由：`src/router/router.jsx`
  * 配置路由相关信息。如果只考虑生成路由，你只需要指定每条配置的路径及对应渲染组件。
  * 输出路由数据，并将路由数据（routerData）挂载到每条路由对应的组件上.
* 自动生成路由：`src/utils/getRoutes.jsx`
  * @param1:当前路由的 match 路径
  * @param2:路由信息 routerData
  * 对配置的路由列表进行筛选处理，对于类似 /dashboard/dashboard-pro 的路由，我们默认你希望它在 /dashboard 里嵌套展示（如果有配置 /dashboard），所以在渲染 /dashboard 的地方不会同时渲染 /dashboard/dashboard-pro

  ```js
  routerData = {
    '/dashboard/analysis': {
      component: DynamicComponent(),
      name: '分析页',
    },
    '/dashboard/monitor': {
      component: DynamicComponent(),
      name: '监控页',
    },
    '/dashboard/workplace': {
      component: DynamicComponent(),
      name: '工作台',
    },
  }
  ```

## 菜单

菜单配置文件：`src/dashboard/getMenuData.jsx`，其主要作用是：

* 配置菜单相关数据，菜单项的跳转链接`<Link>`的“to”为配置项及其所有父级配置 path 参数的拼接
* 为菜单路由：`src/router/router.jsx`提供路由名称（name) 等数据，根据拼接好的跳转链接来匹配相关路由
* 如果你的项目并不需要菜单，你也可以直接在 `src/router/router.jsx`中配置 name 信息
* 如果需要隐藏某条菜单项，可以在`src/dashboard/getMenuData.jsx`的该条数据中增加hideInMenu（Boolean）字段，并设置为true

## 新增页面及业务组件

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。为了保证规范的一致性，请按脚手架的规范来写，可以避免不必要的错误。

对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理。这些组件一般有以下特征：
  * 只负责一块相对独立，稳定的功能；
  * 没有单独的路由配置；
  * 可能是纯静态的，也可能包含自己的 state，但不涉及服务器数据流，仅受父组件（通常是一个页面）传递的参数控制。

* 容器组件：`src/container/`
* 傻瓜组件：`src/component/`
* Hint：
  * 导出组件的类名一定要大写，命名尽量体现组件的功能
  * less文件不要放在style文件夹下，由于我们默认配置了 CSS Modules，排除了style文件夹下的文件生成


## 样式

* 如果你需要覆盖Dbox UI 下的组件样式，只要将覆盖值放到src同级别的`style/reset.less`中即可
* 如果需要，你可以在样式文件的头部引入Dbox样式变量文件，这样可以很方便的获取Dbox UI 的样式变量并在你的文件里使用，有利于保持页面的一致性，也方便定制主题。`@import "style/themes/default/default.less"`

### less

Dbox UI 和 Dbox Pro 默认使用less作为样式语言，

### CSS Modules

在样式开发过程中，有两个问题比较突出：

* 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
* 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

为了解决上述问题，我们的脚手架默认使用 CSS Modules 模块化方案，先来看下在这种模式下怎么写样式。

```js
// example.js
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}
```

less 文件好像没什么改变，只是类名比较简单（实际项目中也是这样），js 文件的改变就是在设置 className 时，用一个对象属性取代了原来的字符串，属性名跟 less 文件中对应的类名相同，对象从 less 文件中引入。
在上面的样式文件中，.title 只会在本文件生效，你可以在其他任意文件中使用同名选择器，也不会对这里造成影响。不过有的时候，我们就是想要一个全局生效的样式呢？可以使用 :global。

```css
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

/* 定义全局样式 */
:global(.text) {
  font-size: 16px;
}

/* 定义多个全局样式 */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}

```

CSS Modules 的基本原理很简单，就是对每个类名（非 :global 声明的）按照一定规则进行转换，保证它的唯一性。如果在浏览器里查看这个示例的 dom 结构，你会发现实际渲染出来是这样的：

```html
<div class="title___3TqAx">title</div>
```

类名被自动添加了一个 hash 值，这保证了它的唯一性。
除了上面的基础知识，还有一些关键点需要注意：
  * CSS Modules 只会对 className 以及 id 进行转换，其他的比如属性选择器，标签选择器都不进行处理，推荐尽量使用 className。
  * 由于不用担心类名重复，你的 className 可以在基本语意化的前提下尽量简单一点儿。

[CSS Modules 详解及 React 中实践](https://github.com/camsong/blog/issues/5)

### 引用组件的样式覆盖

由于业务的个性化需求，我们经常会遇到需要覆盖组件样式的情况，这里举个简单的例子。
Select 在多选状态下，默认会展示所有选中项，这里我们给它加一个限制高度，超过此高度就出滚动条。

```js
// TestPage.js
import Select from 'components/select';
import styles from './TestPage.less'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: 300 }}
    placeholder="Please select"
    className={styles.customSelect}
  >
    {children}
  </Select>
, mountNode);

```

```css
// TestPage.less
.customSelect {
  :global {
    .idoll-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

方法很简单，有两点需要注意：
引入的 Dbox UI 组件类名没有被 CSS Modules 转化，所以被覆盖的类名 .idoll-select-selection 必须放到 :global 中。
因为上一条的关系，覆盖是全局性的，为了防止对其他 Select 造成影响，可以给组件添加 className，只对这类组件进行覆盖，也可以利用外层类名实现这种限制。

## 和服务端进行交互

我们使用axios框架进行与后端的交互，同时对接口统一的管理。

* service `api/services.jsx` 提供与后端交互的方法，根据统一的接口规范进行统一处理。[接口规范](http://git-ma.paic.com.cn/loan-cloud/code-guide/blob/master/interface-specification.md)
* urls `api/urls.jsx` 将所有接口按各自模块划分，最后通过urls.jsx对后端接口统一进行整合暴露给外部引用

### 不同模式下数据来源

service中根据当前的NODE_ENV，配置不同的hostName，获取相应数据。你可以在servic中配置不同模式下的数据源

在开发模式下，默认获取mock文件夹中的前端的mock数据

## 引入外部模块

除了 Dbox UI 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部模块.

## 构建和发布

当项目开发完毕，只需要运行一行命令就可以打包你的应用：`npm run build`,构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件，通常是 ***.js、***.css、index.html 等静态文件。
