## 后端API配置

需要修改该目录下的两个文件：

1. src/api/routers/

* 新建模块文件，如user.jsx
* 将路由路径导出，该路径即为与后端约定的API接口，如 `export default {queryUserInfo: '/peopleManagement/userInfo',}`

2. src/api/urls.jsx

* 将第一步中配置的路由路径引入到该文件：`import User from './routers/user'`
* 引入导入的模块：`const urls = [User];`

## mock 数据

* 新建模块文件夹
* 新建mock的json文件

## 使用异步数据

* 在需要调用后端数据的组件中引入service及urls:`import { services, urls } from 'api/index';`
* 
    `services.get(urls.queryUserInfo, {}, this.getData);`

