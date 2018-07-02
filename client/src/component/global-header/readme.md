---
title: globalHeader
name: pro全局头部
---

通常作为系统全局的头部，有两种布局结构，分别单层结构和双层结构。高度分别为60，90

## API

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 布局结构 | string | -默认单层，双层为double
currentUser | 当前用户的信息 | object | -{name: 'jack'}
systemName | 系统名称 | string | -
routerPath | 当前路由名称 | string | -
leftChildren | 双层结构下左下角dom元素 | node | -
centerChildren | 中间dom元素,默认为当前日期信息 | node | -
onMenuClick | 点击用户名下拉单选项时间 | function | 
