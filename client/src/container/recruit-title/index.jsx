import React from 'react'
import {Select, Table, Button} from 'components'
import FilterStep from 'component/filter-step';
import {optionsCreate} from 'utils/creator';
import {services, urls} from 'api';
import styles from './index.less'
// pro-drag
export default class RecruitTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      active: false, // true流程按钮处于激活状态
      jobs: [],
      tableData: []
    };
  }
  componentDidMount() {
    services.get(urls.queryDropdown, {TYPE: 'TECHNOLOGY_DIRECTION'}, this.getTechDirection)
    services.get(urls.positionQueryList, {POSITION_PROCESS_CODE: 0, TECHNOLOGY_DIRECTION_CODE: 'WEBFRONT'}, this.getPositionQueryList)
  }
  getTechDirection = (data) => {
    this.setState({
      jobs: data
    })
  }
  getPositionQueryList = (data) => {
    this.setState({
      tableData: data
    })
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
    services.get(urls.positionDelete, {ID: []}, this.deleteSuccess)
  }
  deleteSuccess = (data) => {
    console.log(data);
  }
  render () {
    const {
      active,
      jobs,
      tableData
    } = this.state
    const colums = [{
        CODE: 'recruiting',
        VALUE: '招聘中',
      }, {
        CODE: 'stopRecruit',
        VALUE: '停止招聘',
    }]
    const stepsMap = {
      recruiting: '招聘中',
      stopRecruit: '停止招聘',
    }
    // const jobs = ['all', 'web', 'java', 'test']
    // const jobsMap = {
    //   all: '全部职位',
    //   web: '前端工程师',
    //   java: 'JAVA工程师',
    //   test: '测试工程师',
    // }
    const columns = [
      {
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
    const {
       selectedRowKeys
     } = this.state;
    const rowSelection = {
       selectedRowKeys,
       onChange: this.onSelectChange,
     };
    return (
      <div className={styles.recruit_title}>
        <FilterStep colums={colums || []} stepsMap={stepsMap || {}} handleStep={this.handleStep} active={active} />
        <div className={styles.switch_tab}>
          <Select defaultValue='全部职位' style={{ width: 120 }}>
            {
                optionsCreate({
                  options: jobs
                  })
            }
          </Select>
          <div>
            <Button onClick={this.handleAdd} type='primary'>添加招聘职位</Button>
            <Button onClick={this.handleDelete} style={{marginLeft: '16px'}}>停止招聘</Button>
          </div>
        </div>
        <Table className={styles.table} rowSelection={rowSelection} columns={columns} dataSource={tableData} scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
