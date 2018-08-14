---
title:
  en-US: Login
  zh-CN: Login
subtitle: 登录
cols: 1
order: 15
---

支持多种登录方式切换，内置了几种常见的登录控件，可以灵活组合，也支持和自定义控件配合使用。

## API

### Login

参数 | 说明 | 类型 | 默认值
----|------|-----|------
onSubmit | 点击提交时的回调 | (err, values) => void | -


### Login.UserName

参数 | 说明 | 类型 | 默认值
----|------|-----|------
name | 控件标记，提交数据中同样以此为 key | String | -
rules | 校验规则，同 Form getFieldDecorator(id, options) 中 [option.rules 的规则](getFieldDecorator(id, options)) | object[] | -

除上述属性以外，Login.UserName 还支持 dbox.Input 的所有属性，并且自带默认的基础配置，包括 `placeholder` `size` `prefix` 等，这些基础配置均可被覆盖。

### Login.Password 同 Login.UserName

### Login.Submit

支持 dbox.Button 的所有属性。

