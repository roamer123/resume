import React from 'react'
import {Select, Table, Input} from 'components'
import SearchFilter from 'component/search-filter';
import FilterStep from 'component/filter-step';
import {optionsCreate, liCreate} from 'utils/creator';
import styles from './index.less'

const Option = Select.Option;

export default class CandidateHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 'all',
      selectedRowKeys: [], // Check here to configure the default column
    }
  }
  handleStep = (e, step, li) => {
    e.target.style = {color: 'red'}
    console.log(e.target, step, li)
  }
  handleAdd = () => {
    window.location.href = `${window.location.href}/add`
  }
  render () {
    const jobs = ['all', 'web', 'java', 'test']
    const jobsMap = {
      all: '全部职位',
      web: '前端工程师',
      java: 'JAVA工程师',
      test: '测试工程师',
    }
    const filters = {
      newCandidate: 0,
      resumeFirst: 1,
      interviewSelf: 2,
      resume: 3,
      interview: 4,
      computerTest: 5,
      pass: 6,
      deleted: 7,
    }
    const steps = ['newCandidate', 'resumeFirst', 'interviewSelf', 'resume', 'interview', 'computerTest', 'pass', 'deleted']
    const stepsMap = {
      newCandidate: '新增候选人',
      resumeFirst: '初选通过',
      interviewSelf: '内面',
      resume: '客户简历筛选',
      interview: '面试',
      computerTest: '机考',
      pass: '入场',
      deleted: '已淘汰',
    }
    const filterCategories = {
      job: 'all',
      step: 'interview', // 对应流程
      state: 'abandon', // 对应状态，放弃 | 不符合 | 无需求 | 薪资过高
      supplier: '中国平安', // 供应商
    }
    const filterDetail = {
      name: '张三',
      minAge: 18,
      maxAge: 40,
      minWorkAge: 3,
      maxWorkAge: 10,
      max_education: 0, // 0-硕士，1-本科，2-大专，3-大专以下
      job_rank: 0, // 0-初级，1-中级，2-高级，3-资深
    }
    const filterRequirement = {...filterCategories, ...filterDetail}
    const candidate = {
      job: 'web',
      name: '张三',
      age: 24,
      workAge: 3,
      supplier: 'pingan',
      max_education: 0,
      job_rank: 0,
      remark: '',
    }
    const suppliers = ['供应商', '中国平安', '金融股份']
    const actions = ['addOne', 'addMore']
    const actionsMap = {
      addOne: '添加候选人',
      addMore: '批量添加',
    }

    const columns = [{
        title: 'Full Name',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
      },
      {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left'
      },
      {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1',
        width: 150
      },
      {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2',
        width: 150
      },
      {
        title: 'Column 3',
        dataIndex: 'address',
        key: '3',
        width: 150
      },
      {
        title: 'Column 4',
        dataIndex: 'address',
        key: '4',
        width: 150
      },
      {
        title: 'Column 5',
        dataIndex: 'address',
        key: '5',
        width: 150
      },
      {
        title: 'Column 6',
        dataIndex: 'address',
        key: '6',
        width: 150
      },
      {
        title: 'Column 7',
        dataIndex: 'address',
        key: '7',
        width: 150
      },
      {
        title: 'Column 8',
        dataIndex: 'address',
        key: '8'
      },
      {
        title: 'Action',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href='javascript:;' > action </a>,
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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div className={styles.candidate_list}>
        <div className={styles.switch_tab}>
          <Select defaultValue='all' style={{ width: 120 }}>
            {
              optionsCreate(jobs, jobsMap)
            }
          </Select>
          <Select defaultValue='addOne' style={{ width: 120 }} onSelect={this.handleAdd}>
            {
              optionsCreate(actions, actionsMap)
            }
          </Select>
        </div>
        {
          <FilterStep filters={filters} stepsMap={stepsMap} handleStep={this.handleStep} />
        }
        <div className={styles.detail}>
          <div className={styles.filter_detail}>
            <SearchFilter columns={filterDetail} className={styles.search_filter} />
            <Select
              defaultValue='供应商'
              className={styles.suppliers_filter}
              >
              {
                optionsCreate(suppliers)
              }
            </Select>
          </div>
          <div className={styles.action_detail}>
            <Select
              defaultValue='移动到面试'
              className={styles.suppliers_filter}
              style={{minWidth: '160px'}}
              >
              {
                optionsCreate(steps, stepsMap, '移动到')
              }
            </Select>
          </div>
        </div>
        <Table className={styles.table} rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
//  ---------------------------华丽丽的分割线------------------------

//
