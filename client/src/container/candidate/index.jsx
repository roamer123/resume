import React from 'react'
import classNames from 'classnames'

import {Select, Table} from 'components'
import SearchFilter from 'component/search-filter';
import FilterStep from 'component/filter-step';
import {optionsCreate} from 'utils/creator';
import {services, urls} from 'api';

import styles from './index.less'

// const Option = Select.Option;

export default class CandidateHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 'all',
      selectedRowKeys: [], // Check here to configure the default column
      jobs: [],
      suppliers: [],
      steps: [],
      stepsData: [],
      tableData: [],
    }
  }
  componentDidMount() {
    services.get(urls.queryDropdown, { TYPE: 'TECHNOLOGY_DIRECTION' }, this.getTechDirection)
    services.get(urls.queryDropdown, { TYPE: 'NEED_ORGANIZATION' }, this.getNeedOrganization)
    services.get(urls.queryDropdown, { TYPE: 'INTERVIEWER_PROCESS' }, this.getInterviewerProcess)
    services.post(urls.candidateProcessCount, {}, this.getCandidateProcessCount)
    services.post(urls.candidateSearch, {
      ORGANIZATION_CODE: 'SUPPLIER_WSHH',
      INTERVIEWER_PROCESS_CODE: '',
      NEED_ORGANIZATION_CODE: '',
      TECHNOLOGY_DIRECTION_CODE: '',
    }, this.getCandidateSearch)
  }
  getTechDirection = (data) => {
    this.setState({
      jobs: data
    })
  }
  getNeedOrganization = (data) => {
    this.setState({
      suppliers: data
    })
  }
  getInterviewerProcess = (data) => {
    this.setState({
      steps: data
    })
  }
  getCandidateProcessCount = (data) => {
    this.setState({
      stepsData: data
    })
  }
  getCandidateSearch = (data) => {
    this.setState({
      tableData: data
    })
  }
  handleStep = (e, step, li) => {
    e.target.style = {color: 'red'}
    console.log(e.target, step, li)
    services.get(urls.candidateProcessChange, [{
      INTERVIEWER_PROCESS_CODE: 'PROCESS_NEW',
      LIST: {},
      ID: [],
    }], this.getCandidateProcessChange)
  }
  getCandidateProcessChange = (data) => {
    console.log(data);
  }
  handleAdd = () => {
    window.location.href = `${window.location.href}/add`
  }
  handleDelete = () => {
    services.post(urls.candidateDelete, {IDS: []}, this.deleteCandidateSuccess)
  }
  deleteCandidateSuccess = (data) => {

  }
  modalLabelGenerator = (step) => {
    let modalLabel = []
    switch (step) {
      case 0:
        // 移动到新增候选人
        modalLabel = []
        break;
      case 1:
        // 移动到初选通过
        modalLabel = []
        break;
      case 2:
        // 移动到内面
        modalLabel = []
        break;
      case 3:
        // 移动到客户简历筛选
        modalLabel = [
          '用人单位',
        ]
        break;
      case 4:
        // 移动到客户面试
        modalLabel = [
          '面试日期',
          '面试官',
          '地址',
        ]
        break;
      case 5:
        // 移动到机考
        modalLabel = [
          '核定级别',
          '机考日期',
        ]
        break;
      case 6:
        // 移动到入场
        modalLabel = [
          '入场日期',
        ]
        break;
      case 7:
        // 移动到已淘汰
        modalLabel = [
          '淘汰|流失原因',
          '备注',
        ]
        break;
      default:
        return
    }
    return modalLabel;
  }
  render () {
    const {
      jobs,
      suppliers,
      steps,
      stepsData,
      tableData
    } = this.state
    // const jobs =
    // [
    // '全部职位',
    // '前端',
    // 'web前端',
    // 'HTML5',
    // 'Node.js',
    // 'JavaScript',
    // 'Android',
    // 'iOS',
    // 'U3D',
    // 'COCOS2DX',
    // '前端架构师',

    // '后端',
    // 'JAVA工程师',
    // 'PHP',
    // 'C++',
    // '.NET',
    // 'C#',
    // 'Python',
    // '架构师',

    // '数据',
    // '数据挖掘',
    // '算法工程师',
    // '数据分析师',
    // '数据架构师',
    // '算法研究员',

    // '测试',
    // '测试工程师',
    // '自动化测试',
    // '功能测试',
    // '性能测试',
    // '测试开发',
    // '移动端测试',
    // '游戏测试',
    // '硬件测试',
    // '软件测试',

    // '运维/技术支持',
    // '运维工程师',
    // '运维开发工程师',
    // '网络工程师',
    // '系统工程师',
    // 'IT技术支持',
    // '系统管理员',
    // '网络安全',
    // '系统安全',

    // '项目管理',
    // '项目经理',
    // '项目助理',

    // '产品',
    // '产品经理',
    // '网页产品经理',
    // '移动产品经理',
    // '产品助理',

    // '设计',
    // '视觉设计',
    // '网页设计师',
    // 'APP设计师',
    // 'UI设计师',
    // '平面设计师',
    // '美工',
    // '设计师助理',

    // '交互设计',
    // '交互设计师',
    // '无线交互设计师',
    // '网页交互设计师',
    // '硬件交互设计师',
    // 'UX设计师',
    // '用户研究员',

    // '其他',
    // '人事助理',
    // '助理专员',
    // ]
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
    // const steps = ['newCandidate', 'resumeFirst', 'interviewSelf', 'resume', 'interview', 'computerTest', 'pass', 'deleted']
    // const stepsMap = {
    //   newCandidate: '新增候选人', // 0
    //   resumeFirst: '初选通过', // 1
    //   interviewSelf: '内面', // 2
    //   resume: '客户简历筛选', // 3
    //   interview: '面试', // 4
    //   computerTest: '机考', // 5
    //   pass: '入场', // 6
    //   deleted: '已淘汰', // 7
    // }
    // const filterCategories = {
    //   job: 'all',
    //   step: 'interview', // 对应流程
    //   state: 'abandon', // 对应状态，放弃 | 不符合 | 无需求 | 薪资过高
    //   supplier: '中国平安', // 供应商
    // }
    const filterDetail = {
      name: '张三',
      minAge: 18,
      maxAge: 40,
      minWorkAge: 3,
      maxWorkAge: 10,
      minSalary: 13,
      maxSalary: 20,
      max_education: 0, // 0-硕士，1-本科，2-大专，3-大专以下
      job_rank: 0, // 0-初级，1-中级，2-高级，3-资深
    }
    // const filterRequirement = {...filterCategories, ...filterDetail}
    // const candidate = {
    //   job: 'web',
    //   name: '张三',
    //   age: 24,
    //   workAge: 3,
    //   supplier: 'pingan',
    //   max_education: 0,
    //   job_rank: 0,
    //   remark: '',
    // }
    // const suppliers = ['供应商', '中国平安', '金融股份']
    const actions = [{
      CODE: 'addOne',
      VALUE: '添加候选人',
    }, {
      CODE: 'addMore',
      VALUE: '批量添加',
    }]

    const columns = [{
        title: '姓名',
        width: 80,
        dataIndex: 'NAME',
        key: 'NAME',
        fixed: 'left'
      },
      {
        title: '年龄',
        width: 60,
        dataIndex: 'AGE',
        key: 'AGE',
        fixed: 'left'
      },
      {
        title: '工作年限',
        dataIndex: 'WORKING_YEARS_CODE',
        key: 'WORKING_YEARS_CODE',
        width: 150
      },
      {
        title: '最高学历',
        dataIndex: 'EDUCATION_LEVEL_CODE',
        key: 'EDUCATION_LEVEL_CODE',
        width: 150
      },
      {
        title: '是否在职',
        dataIndex: 'IS_ON_JOB',
        key: 'IS_ON_JOB',
        width: 150
      },
      {
        title: '级别',
        dataIndex: 'RANK_LEVEL_CODE',
        key: 'RANK_LEVEL_CODE',
        width: 150
      },
      {
        title: '联系方式',
        dataIndex: 'PHONE',
        key: 'PHONE',
        width: 150
      },
      {
        title: '邮箱',
        dataIndex: 'EMAIL',
        key: 'EMAIL',
        width: 150
      },
      {
        title: '技术方向',
        dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
        key: 'TECHNOLOGY_DIRECTION_CODE',
        width: 150
      },
      {
        title: '住址',
        dataIndex: 'DOMICILE',
        key: 'DOMICILE'
      },
      {
        title: '备注',
        key: 'REMARK',
        fixed: 'REMARK',
        width: 100,
      },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href='javascript:;' onClick={this.handleDelete}> 删除 </a>,
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
          <Select defaultValue='全部职位' style={{ width: 120 }}>
            {
              optionsCreate({
                options: jobs,
              })
            }
          </Select>
          <Select
            defaultValue='addOne'
            style={{ width: 120 }}
            onSelect={this.handleAdd}
            className={
              classNames('dark')
            }
          >
            {
              optionsCreate({
                options: actions,
              })
            }
          </Select>
        </div>
        {
          <FilterStep colums={steps || []} stepsMap={stepsData || []} handleStep={this.handleStep} />
        }
        <div className={styles.detail}>
          <div className={styles.filter_detail}>
            <SearchFilter columns={filterDetail} className={styles.search_filter} />
            <Select
              defaultValue='全部供应商'
              className={styles.suppliers_filter}
              >
              {
                optionsCreate({
                  options: suppliers
                })
              }
            </Select>
          </div>
          <div className={styles.action_detail}>
            <Select
              defaultValue='移动到面试'
              className={
                classNames(styles.suppliers_filter, 'dark')
              }
              style={
                {
                  minWidth: '160px',
                }
              }
              >
              {
                optionsCreate({
                  options: steps,
                  addonBefore: '移动到'
                })
              }
            </Select>
          </div>
        </div>
        <Table
          className={styles.table}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
//  ---------------------------华丽丽的分割线------------------------

//
