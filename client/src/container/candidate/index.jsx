import React from 'react'
import classNames from 'classnames'
// import PropTypes from 'prop-types';
import {
  Select,
  Table,
  Button,
  Icon,
  Dropdown,
} from 'components'
import Menu, {
  MenuItem,
} from 'rc-menu';
import SearchFilter from 'component/search-filter'
import FilterStep from 'component/filter-step'
import Guid from 'component/guid'
import Main from 'component/main';
import {
  optionsCreate,
  itemCreate
} from 'utils/creator'
import {
  successMsg,
  errorMsg,
  warningMsg,
} from 'utils/message'
import {services, urls} from 'api'

import styles from './index.less'

const Option = Select.Option;
const CODE = 'CODE'
// const VALUE = 'VALUE' // eslint-disable-line no-console
const TECHNOLOGY_DIRECTION = 'TECHNOLOGY_DIRECTION'
const NEED_ORGANIZATION = 'NEED_ORGANIZATION'
const INTERVIEWER_PROCESS = 'INTERVIEWER_PROCESS'
const ORGANIZATION_CODE = 'SUPPLIER_WSHH'
const service = () => ({
  queryDropdown: (f1, f2, f3) => {
      services.get(urls.queryDropdown, { TYPE: TECHNOLOGY_DIRECTION }, f1)
      services.get(urls.queryDropdown, { TYPE: NEED_ORGANIZATION }, f2)
      services.get(urls.queryDropdown, { TYPE: INTERVIEWER_PROCESS }, f3)
    },
  candidateProcessCount: (fn) => services.post(urls.candidateProcessCount, {
    ORGANIZATION_CODE: ORGANIZATION_CODE,
  }, fn),
  candidateSearch: (fn, param) => services.post(urls.candidateSearch, {
    ...param,
    ORGANIZATION_CODE: ORGANIZATION_CODE,
  }, fn),
  candidateProcessChange: (fn, param) => services.post(urls.candidateProcessChange, {
    INTERVIEWER_PROCESS_CODE: param.INTERVIEWER_PROCESS_CODE,
    IDS: param.IDS,
  }, fn),
  candidateDelete: (fn, param) => services.post(urls.candidateDelete, param, fn),
  // download: (fn, param) => services.post(urls.download, param, fn),
})


export default class CandidateHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: 'PROCESS_NEW', // ‘CODE’字段值
      selectedRowKeys: [], // 已选择的记录的行号index：Array
      jobs: [],
      suppliers: [],
      steps: [], // 流程，‘CODE’ ‘VALUE’
      stepsData: [], // ‘CODE’字段值，Number
      tableData: [],
      moveTo: '',
      ORGANIZATION_CODE: ORGANIZATION_CODE,

      // @guid
      guidSteps: [{
          target: '.my-first-step',
          title: '职位筛选',
          content: '通过“职位筛选”过滤出符合条件的候选人',
          placement: 'bottom',
        },
        {
          target: '.my-other-step',
          title: '添加候选人',
          content: (
            <div>
              通过“添加候选人
              <br />”新增一条记录到“新增候选人”记录
            </div>
          ),
          placement: 'bottom',
          // disableCloseOnEsc: true,
          // disableOverlayClicks: true,
          // disableBeacon: true,
          // event: 'hover',
        },
        {
          target: '.my-3-step',
          title: '添加候选人',
          content: `通过“添加候选人”新增一条记录到“新增候选人”记录`,
          placement: 'bottom',
          // disableCloseOnEsc: true,
          // disableOverlayClicks: true,
          // disableBeacon: true,
          // event: 'hover',
        },
      ]

    }
  }
  componentDidMount() {
    service().queryDropdown.call(this, this.getTechDirection, this.getNeedOrganization, this.getInterviewerProcess);
    service().candidateProcessCount.call(this, this.getCandidateProcessCount);
    this.updateTable({})
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.moveTo !== this.state.moveTo) {
    }
    return true
  }
  updateTable = (param) => {
    service().candidateSearch.call(this, this.getCandidateSearch, {
      INTERVIEWER_PROCESS_CODE: this.state.step || '',
      NEED_ORGANIZATION_CODE: this.state.NEED_ORGANIZATION_CODE || '',
      TECHNOLOGY_DIRECTION_CODE: this.state.TECHNOLOGY_DIRECTION_CODE || '',
      ...param,
    });
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
    successMsg(`刷新成功`)
    this.setState({
      tableData: data
    })
  }
  handleStep = (e, li, step) => {
    e.target.style = {color: 'red'}
    console.log(e.target, step[CODE], li)
    this.setState({
      step: step[CODE]
    }, () => {
      console.log(this.state.step)
       this.updateTable({
         INTERVIEWER_PROCESS_CODE: this.state.step // INTERVIEWER_PROCESS_CODE
       })
    })
  }
  handleAdd = () => {
    window.location.href = `${window.location.href}/add`
  }
  handleDelete = (e, id) => {
    console.log('handleDelete', e, id);
    var IDS = [...this.state.selectedRowKeys, id]
    service().candidateDelete.call(this, this.deleteCandidateSuccess, { IDS: IDS || [] });
  }
  download = (e, id) => {
    // service().download.call(this, this.downloadSuccess, { CANDIDATE_ID: 2 });
    // window.href = 'http://172.31.8.117:7001/download?CANDIDATE_ID=2'
  }
  downloadSuccess = (data) => {
    console.log('downloadSuccess', data)
  }
  deleteCandidateSuccess = (data) => {
    successMsg('已淘汰/流失')
    service().candidateProcessCount.call(this, this.getCandidateProcessCount);
    this.updateTable({
      INTERVIEWER_PROCESS_CODE: this.state.step // INTERVIEWER_PROCESS_CODE
    })
  }
  handleMoveStep = (step) => {
    console.log('handleMoveStep_e', step);
    if (!this.state.selectIds) {
      warningMsg(`请选择要操作的候选人`)
      return
    }
    service().candidateProcessChange.call(this, this.getCandidateProcessChange, {
      INTERVIEWER_PROCESS_CODE: step,
      IDS: this.state.selectIds,
    });
  }
  handleSearch = (key, value) => {
    console.log(key, value);
    const search = {[`${key}_CODE`]: value}
    this.setState(search, () => {
      this.updateTable({
        INTERVIEWER_PROCESS_CODE: this.state.step,
        NEED_ORGANIZATION_CODE: this.state.NEED_ORGANIZATION_CODE,
        TECHNOLOGY_DIRECTION_CODE: this.state.TECHNOLOGY_DIRECTION_CODE,
      })
    })
  }
  getCandidateProcessChange = (data) => {
    if (data && data.code === 'success') {
      const step = data.INTERVIEWER_PROCESS_CODE
      service().candidateProcessCount.call(this, this.getCandidateProcessCount);
      this.updateTable({
        INTERVIEWER_PROCESS_CODE: this.state.step // INTERVIEWER_PROCESS_CODE
      })
      successMsg(`已移动到${step}`)
      this.setState({
        moveTo: step
      })
    } else {
      errorMsg(data.code)
    }
  }
  onSelectChange = (selectedRowKeys, selectedRows) => {
    const selectIds = selectedRows.map((record) => (record.ID))
    console.log('selectedRowKeys changed: ', selectedRowKeys, selectedRows, selectIds);
    this.setState({
      selectIds: selectIds, // 已选择的记录的ID：Array
      selectedRowKeys: selectedRowKeys, // 已选择的记录的行号：Array
    }, () => {
      console.log(this.state.selectedRowKeys)
    });
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
      step,
      steps,
      stepsData,
      tableData,
      guidSteps, // @guid
    } = this.state

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
    const columns = [{
        title: '姓名',
        width: 80,
        dataIndex: 'NAME',
        key: 'NAME',
        fixed: 'left'
      },
      {
        title: '年龄',
        width: 46,
        dataIndex: 'AGE',
        key: 'AGE',
        fixed: 'left'
      },
      {
        title: '工作年限',
        dataIndex: 'WORKING_YEARS_CODE',
        key: 'WORKING_YEARS_CODE',
        width: 100,
        render: (text, record, index) => record.WORKING_YEARS_NAME

      },
      {
        title: '最高学历',
        dataIndex: 'EDUCATION_LEVEL_CODE',
        key: 'EDUCATION_LEVEL_CODE',
        width: 100,
        render: (text, record, index) => record.EDUCATION_LEVEL_NAME
      },
      {
        title: '是否在职',
        dataIndex: 'IS_ON_JOB',
        key: 'IS_ON_JOB',
        width: 100,
        // 0-否，1-是
        render: (text, record, index) => record.IS_ON_JOB === 0 ? '否' : '是'
      },
      {
        title: '级别',
        dataIndex: 'RANK_LEVEL_CODE',
        key: 'RANK_LEVEL_CODE',
        width: 50,
        render: (text, record, index) => record.RANK_LEVEL_NAME
      },
      {
        title: '联系方式',
        dataIndex: 'TELEPHONE',
        key: 'TELEPHONE',
        width: 120
      },
      {
        title: '邮箱',
        dataIndex: 'EMAIL',
        key: 'EMAIL',
        width: 190
      },
      {
        title: '技术方向',
        dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
        key: 'TECHNOLOGY_DIRECTION_CODE',
        width: 140,
        render: (text, record, index) => record.TECHNOLOGY_DIRECTION_NAME
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
        render: (text, record, index) => (<div>
          <a href='javascript:;' onClick={(e) => this.handleDelete(e, record.ID)}> 淘汰 </a>
          <Dropdown
            trigger={['click']}
            overlay={
              <Menu>
              <MenuItem
                key={`${index}_1`}
              >
                <a href={`http://172.31.8.117:7001/candidate/download?CANDIDATE_ID=${2}`}
                  onClick={(e) => this.download(e, record.ID)}
                >查看简历</a>
              </MenuItem>
              <MenuItem
                key={`${index}_2`}
              >
                <a href={`http://172.31.8.117:7001/candidate/download?CANDIDATE_ID=${record.ID}`}
                  onClick={(e) => this.download(e, record.ID)}
                >下载简历</a>
              </MenuItem>
              <MenuItem
                key={`${index}_3`}
              >
                  <span onClick={(e) => this.download(e, record.ID)}>修改信息</span>
              </MenuItem>
              </Menu>
            }
            >
            <a href='#' className='idoll-icon-a'>
              更多 {<Icon type='caret-down' />}
            </a>
          </Dropdown>
        </div>),
      },
  ];
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const containerStyle = {
      'marginBottom': '24px',
      'backgroundColor': '#fff',
      'borderRadius': '2px',
      'border': '1px solid #0db27a'
    }
    const headerStyle = {
      'height': '64px',
      'padding': '16px 24px',
      'borderBottom': '1px solid #e9e9e9',
      'display': 'flex',
      'justifyContent': 'space-between'
    }
    return (
      <Main className={styles.candidate_list} backgroundColor='transparent'>
        <Guid
          guidSteps={guidSteps}
         />
        <div style={containerStyle}>
          <div style={headerStyle}>
            <Select
              defaultValue='全部职位'
              style={{ width: 120 }}
              onSelect={(value) => this.handleSearch(INTERVIEWER_PROCESS, value)}
              className='my-first-step'
              >
              {
                optionsCreate({
                  options: jobs,
                })
              }
            </Select>
            <div>
              <Button type='primary' onClick={this.handleAdd}>添加候选人</Button>
              <Button className='ml8'>批量添加</Button>
              <Button className='ml8' disabled>智能添加</Button>
            </div>
          </div>
          <FilterStep colums={steps || []} data={stepsData || {}} handleStep={this.handleStep} active={step} />
        </div>
        <div className={styles.detail}>
          <div className={styles.action_detail}>
          <Dropdown
            trigger={['click']}
            style={{minWidth: '160px'}}
            overlay={
              <Menu
                style={{minWidth: '160px'}}
              >
                {itemCreate({
                options: steps,
                addonBefore: '移动到',
                handleClick: (step) => this.handleMoveStep(step)
              })}
            </Menu>
            }
            >
            <a href='#' className='idoll-icon-a'>
              <Button type='primary' style={{minWidth: '160px'}}>{<Icon type='swap' />}移动到面试 {<Icon type='caret-down' />}</Button>
            </a>
          </Dropdown>
            <Button
              onClick={() => this.handleMoveStep('PROCESS_OUT')}
              className='ml8'
              >
              <Icon type='delete' />批量淘汰
            </Button>
            <Button
              onClick={() => this.handleMoveStep('PROCESS_OUT')}
              className='ml8'
              >
              <Icon type='plus-circle-o' />增加需求方
            </Button>
          </div>
          <div className={styles.filter_detail}>
            <Select
              defaultValue='全部供应商'
              className={classNames(styles.suppliers_filter, 'my-3-step')}
              onSelect={(value) => this.handleSearch(NEED_ORGANIZATION, value)}
              >
              <Option
                key={0}
                value={'全部供应商'}
              >
                {
                  `全部供应商`
                }
              </Option>
              {
                optionsCreate({
                  options: suppliers
                })
              }
            </Select>
            <SearchFilter columns={filterDetail} className={classNames('ml8', styles.search_filter)} />
          </div>
        </div>
        <Table
          className={styles.table}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          rowKey={(record => (record.ID))}
          scroll={{ x: 1500, y: 300 }}
          pageSize={10}
          showTotal
          showQuickJumper
          showSizeChanger
          />
      </Main>
    )
  }
}
//  ---------------------------华丽丽的分割线------------------------

//
