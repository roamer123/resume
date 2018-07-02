## 前言

Dbox Pro 是一个企业级中后台前端解决方案,根据Dbox前端协会约定的“设计文档”解决方案抽象出的基础组件的基础上，继续向上封装颗粒度比较大的“业务组件”，并集成比较热门的前端工具解决方案，包括工具支撑：ES-lint | webpack3; 前端支撑：redux | react-router4 | axios；后端数据mock：Express | Mock.js，进一步提升企业级中后台产品前端开发效能。

随着 “Dbox UI组件” 及 “Dbox Pro" 深入应用于企业级应用，我们将持续迭代，逐步沉淀和总结出更多的组件并不断完善

## For 开发者

Dbox系列产品前期将定位于有一定的前端基础的前端开发者，后期可视化后可以像使用PPT一样做前端，逐步扩大到开箱即用。

## 前期准备

### 基础知识储备

技术栈：
es6
less
react16
react-route4
webpack
redux
express
node + ESlint + git + devTool

[面向于有一定的前端基础的react入门学习指引](https://github.com/lulu27753/react-study)
[ESLint中文](http://eslint.cn/)

### 本地环境搭建

#### 安装node | git | yarn

[下载 | Node.js 中文网](http://nodejs.cn/download/)

[Git - Downloading Package](https://git-scm.com/download/win)

[开始使用 | Yarn 中文网](https://yarn.bootcss.com/docs/getting-started.html)

提示：由于公司内网标装环境可以会导致包的安装失败，首先请确保全局安装是在你自己的系统账户下面的.

#### 克隆git仓库

```bash
git clone http://git-ma.paic.com.cn/loan-cloud/onlineManage.git
cd onlineManage # 打开项目文件夹
yarn install # 安装项目依赖 或者 使用 `npm install`
npm start # 启动项目，会自动打开浏览器访问 http://localhost:8080，启动完成后会看到login页面
```

提示：登录页面账号密码均为admin

## 目录结构

Dbox Pro 已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

## 构建部署发布

1. 将index.html中的注释放开
	`<script src="dll/vendors.dll.js"></script> `
2.配置src/api/urls.jsx中的相关配置
```js
	if (_PRD_) {
		// 用于生产环境
		return {
			domainName: `/`,
			suffix: '.do',
			// mock数据中间地址
			mockAdd: '',
			userUrl: '',
		}
	}
```
3.在命令行输入命令并打包

```bash
npm run build # 打包以后，可以在dist文件夹下找到项目的最终生成文件
```

## 后记

接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、全局路由等等各种实用的功能辅助开发，你可以继续探索。同时希望你在使用的过程中遇到任何的问题都能及时反馈到我们项目中的gitlab的issue上，我们将及时解决你的问题，并不断完善项目，为你的开发旅程助力。
