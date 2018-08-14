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
// const dataMap = {
//   position_name: 'PositionName', // 职位名称
//   supplie: 'Supplie', // 供应商
//   job_category_code: 'JobCategoryCode', // 工作性质code
//   job_category_code_name: 'JobCategoryCodeName', // 工作性质name
//   job_experience_demand: 'JobExperienceDemand', // 工作经验要求
//   education_demand: 'EducationDemand', // 学历要求
//   salary_demand: 'SalaryDemand', // 薪资要求
//   latest_come_time: 'LatestComeTime', // 最迟到岗时间
//   principal: 'Principal', // 负责人
//   cooperator: 'Cooperator', // 协作者
//   startor: 'Startor', // 启动者
//   job_desc: 'JobDesc', // jd
//   created_by: 'CreatedBy', // 创建人
//   date_created: 'DateCreated', // 创建时间
//   update_by: 'UpdateBy', // 更新人
//   date_updated: 'DateUpdated', // 更新时间
// }
const inputDataMap = {
  principal: '负责人', // 负责人
  cooperator: '协作者', // 协作者
  recruit_num: '招聘人数', // 招聘人数
}
const dateDataMap = {
  latest_come_time: '最迟到岗时间', // 最迟到岗时间
}
const selectDataMap = {
  position_name: '职位名称', // 职位名称
  supplie: '供应商', // 供应商
  job_category_code_name: '工作性质', // 工作性质name
  job_experience_demand: '工作经验要求', // 工作经验要求
  education_demand: '学历要求', // 学历要求
  salary_demand: '薪资要求', // 薪资要求
}
const dataMap = {
  ...inputDataMap,
  ...selectDataMap,
  ...dateDataMap,
  job_desc: '职位描述', // jd
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
map['job_desc'] = {
  component: Textarea,
  props: {
    size: 'large',
    prefix: dataMap['job_desc'],
    name: 'job_desc',
  },
  itemClass: styles.job_desc
}
export { dataMap };
export default map;
