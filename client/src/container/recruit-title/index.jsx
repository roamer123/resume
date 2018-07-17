import React from 'react'
import {Select, Table, Button} from 'components'
import FilterStep from 'component/filter-step';
import {optionsCreate, liCreate} from 'utils/creator';
import styles from './index.less'
// pro-drag
export default class RecruitTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
    };
  }
  handleStep = (e, step, li) => {
    e.target.style = {
      color: 'red'
    }
    console.log(e.target, step, li)
  }
  handleAdd = () => {
    window.location.href = `${window.location.href}/add`
  }
  handleDelete = () => {
    console.log('handleDelete')
  }
  render () {
    const filters = {
      recruiting: 0,
      stopRecruit: 1,
    }
    const stepsMap = {
      recruiting: '招聘中',
      stopRecruit: '停止招聘',
    }
    const jobs = ['all', 'web', 'java', 'test']
    const jobsMap = {
      all: '全部职位',
      web: '前端工程师',
      java: 'JAVA工程师',
      test: '测试工程师',
    }
    const columns = [{
         title: '职位名称',
         width: 100,
         dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
         key: 'TECHNOLOGY_DIRECTION_CODE',
         fixed: 'left'
       },
       {
         title: '招聘人数',
         width: 100,
         dataIndex: 'NUMBER',
         key: 'NUMBER',
         fixed: 'left'
       },
       {
         title: '供应商',
         dataIndex: 'NEED_ORGANIZATION_CODE',
         key: 'NEED_ORGANIZATION_CODE',
         width: 150
       },
       {
         title: '负责人',
         dataIndex: 'PRINCIPAL',
         key: 'PRINCIPAL',
         width: 150
       },
       {
         title: '协作者',
         dataIndex: 'COOPERATOR',
         key: 'COOPERATOR',
         width: 150
       },
       {
         title: '学历要求',
         dataIndex: 'EDUCATION_LEVEL_CODE',
         key: 'EDUCATION_LEVEL_CODE',
         width: 150
       },
       {
         title: '工作经验要求',
         dataIndex: 'JOB_EXPERIENCE_DEMAND_CODE',
         key: 'JOB_EXPERIENCE_DEMAND_CODE',
         width: 150
       },
       {
         title: '薪资要求',
         dataIndex: 'SALARY_DEMAND',
         key: 'SALARY_DEMAND',
         width: 150
       },
       {
         title: '最迟到岗时间',
         dataIndex: 'LATEST_COME_TIME',
         key: '7',
         width: 150
       },
       {
         title: '职位描述',
         dataIndex: 'JOB_DESC',
         key: 'JOB_DESC'
       },
       {
         title: '操作',
         key: 'action',
         fixed: 'right',
         width: 100,
         render: () => <a href='javascript:;' > 删除 </a>,
       },
     ];

    const data = [];
     for (let i = 0; i < 100; i++) {
       data.push({
         key: i,
         name: `Edrward ${i}`,
         age: 32,
         address: `London Park no. ${i}`,
       });
     }
    const {
       selectedRowKeys
     } = this.state;
    const rowSelection = {
       selectedRowKeys,
       onChange: this.onSelectChange,
     };
    return (
      <div className={styles.recruit_title}>
        <FilterStep filters={filters} stepsMap={stepsMap} handleStep={this.handleStep} />
        <div className={styles.switch_tab}>
          <Select defaultValue='all' style={{ width: 120 }}>
            {
                optionsCreate(jobs, jobsMap)
            }
          </Select>
          <div>
            <Button onClick={this.handleAdd}>添加招聘职位</Button>
            <Button onClick={this.handleDelete} style={{marginLeft: '16px'}}>停止招聘</Button>
          </div>
        </div>
        <Table className={styles.table} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
