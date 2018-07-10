/*
* @Author: lulu27753
* @Date:   2018-04-17 09:42:10
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-17 13:40:56
*/
import React from 'react';

import { Input, Select, DatePicker } from 'components';

import styles from './index.less';

const { Textarea } = Input;
const Option = Select.Option;
const inputDataMap = {
  name: '姓名',
  work_age: '工作年限',
  telephone: '电话',
  email: '邮箱',
  current_salary: '目前薪资（税前)',
  expect_salary: '期望薪资（税前)',
  address: '地点',
}
const dateDataMap = {}
const selectDataMap = {
  level: '级别',
  is_on_job: '是否在职',
  technical: '技术方向',
  official_academic: '最高学历',
}
const dataMap = {
  ...inputDataMap,
  ...selectDataMap,
  ...dateDataMap,
  remark: '备注',
}
const map = {}
Object.keys(inputDataMap).forEach(item => {
  map[item] = {
		component: Input,
		props: {
      size: 'large',
      placeholder: '请输入',
      name: item,
		},
		rules: [{
			required: true,
			message: '请输入必填项！',
		}],
	}
});
Object.keys(selectDataMap).forEach(item => {
  map[item] = {
		component: Select,
		props: {
      size: 'large',
      placeholder: '请选择',
      name: item,
      children: <Option value='china' > China </Option>
		}
	}
});
Object.keys(dateDataMap).forEach(item => {
  map[item] = {
    component: DatePicker,
    props: {
      size: 'large',
      placeholder: '请选择',
      name: item,
    }
  }
});
map['remark'] = {
  component: Textarea,
  props: {
    size: 'large',
    prefix: dataMap['remark'],
    name: 'remark',
  },
  itemClass: styles.remark
}
export { dataMap };
export default map;
