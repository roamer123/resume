import React from 'react'
import classNames from 'classnames'

import {
  Select,
  Table,
  message
} from 'components'
import SearchFilter from 'component/search-filter'
import FilterStep from 'component/filter-step'
import Guid from 'component/guid'
import {optionsCreate} from 'utils/creator'
import {services, urls} from 'api'

import styles from './index.less'

// const Option = Select.Option;
const CODE = 'CODE'
const VALUE = 'VALUE' // eslint-disable-line no-console
const TECHNOLOGY_DIRECTION = 'TECHNOLOGY_DIRECTION'
const NEED_ORGANIZATION = 'NEED_ORGANIZATION'
const INTERVIEWER_PROCESS = 'INTERVIEWER_PROCESS'
const service = () => ({
  queryDropdown: (f1, f2, f3) => {
      services.get(urls.queryDropdown, { TYPE: TECHNOLOGY_DIRECTION }, f1)
      services.get(urls.queryDropdown, { TYPE: NEED_ORGANIZATION }, f2)
      services.get(urls.queryDropdown, { TYPE: INTERVIEWER_PROCESS }, f3)
    },
  candidateProcessCount: (fn) => services.post(urls.candidateProcessCount, {
    ORGANIZATION_CODE: 'SUPPLIER_WSHH'
  }, fn),
  candidateSearch: (fn, param) => services.post(urls.candidateSearch, {
    ...param,
    ORGANIZATION_CODE: 'SUPPLIER_WSHH',
  }, fn),
  candidateProcessChange: (fn, param) => services.post(urls.candidateProcessChange, {
    INTERVIEWER_PROCESS_CODE: param.INTERVIEWER_PROCESS_CODE,
    IDS: param.IDS,
  }, fn)
})
const successMsg = (msg) => {
  message.success(msg || '成功', 0.5);
};
const errorMsg = (msg) => { // eslint-disable-line no-console
  message.error(msg || '失败', 0.5);
};
const warningMsg = (msg) => {
  message.warning(msg || '警告', 0.8);
};

export default class CandidateHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      step: '',
      selectedRowKeys: [], // 已选择的记录的行号index：Array
      jobs: [],
      suppliers: [],
      steps: [],
      stepsData: [],
      tableData: [],
      moveTo: '',
      ORGANIZATION_CODE: 'SUPPLIER_WSHH',

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
      service().candidateProcessCount.call(this, this.getCandidateProcessCount);
      this.updateTable({
        INTERVIEWER_PROCESS_CODE: this.state.step // INTERVIEWER_PROCESS_CODE
      })
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
  handleDelete = (id) => {
    event.persist()
    var IDS = [...this.state.selectedRowKeys, id]
    services.post(urls.candidateDelete, { IDS: IDS || [] }, this.deleteCandidateSuccess)
  }
  deleteCandidateSuccess = (data) => {
    successMsg('删除成功')
  }
  handleMoveStep = (step) => {
    console.log('handleMoveStep_e', step);
    if (!this.state.selectIds) {
      warningMsg(`请选择要操作的候选人`)
      return
    }
    // services.post(urls.candidateProcessChange, {
    //   INTERVIEWER_PROCESS_CODE: step,
    //   IDS: this.state.selectIds,
    // }, this.getCandidateProcessChange)
    service().candidateProcessChange.call(this, this.getcandidateProcessChange, {
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
    console.log('sfauuhiuiuui')
    if (data && data.code === 'success') {
      const step = data.INTERVIEWER_PROCESS_CODE
      successMsg(`已移动到${step}`)
      this.setState({
        moveTo: step
      })
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
        dataIndex: 'RELA_WORKING_YEARS',
        key: 'RELA_WORKING_YEARS',
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
        dataIndex: 'TECHNOLOGY_DIRECTION',
        key: 'TECHNOLOGY_DIRECTION',
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

    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className={styles.candidate_list}>
        <Guid
          guidSteps={guidSteps}
         />
        <div className={styles.switch_tab}>
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

          <Select
            defaultValue='addOne'
            style={{ width: 120 }}
            onSelect={this.handleAdd}
            className={
              classNames('dark', 'my-other-step')
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
          <FilterStep colums={steps || []} data={stepsData || {}} handleStep={this.handleStep} />
        }
        <div className={styles.detail}>
          <div className={styles.filter_detail}>
            <SearchFilter columns={filterDetail} className={styles.search_filter} />
            <Select
              defaultValue='全部供应商'
              className={
              classNames(styles.suppliers_filter, 'my-3-step')
              }
              onSelect={(value) => this.handleSearch(NEED_ORGANIZATION, value)}
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
              className={classNames(styles.suppliers_filter, 'dark')}
              style={{minWidth: '160px'}}
              onSelect={this.handleMoveStep}
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
          rowKey={(record => (record.ID))}
          scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
//  ---------------------------华丽丽的分割线------------------------

//
