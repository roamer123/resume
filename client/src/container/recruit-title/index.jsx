import React from 'react'
import classNames from 'classnames';
import { Select, Table, Button, Divider, Input} from 'components'
import { FilterStep, SelectTag } from 'component';
import { dateFormat } from 'utils/utils';

import {optionsCreate} from 'utils/creator';
import {services, urls} from 'api';
import styles from './index.less'
// pro-drag
const VALUE = 'VALUE'
const CODE = 'CODE'
const Search = Input.Search;
const Option = Select.Option;
export default class RecruitTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      active: false, // true流程按钮处于激活状态
      jobs: [],
      tableData: [],
      stepsData: [],
      tab: 'PRERECRUITING',
      TECHNOLOGY_DIRECTION_CODE: [],
    };
  }
  componentDidMount() {
    services.get(urls.queryDropdown, {TYPE: 'TECHNOLOGY_DIRECTION'}, this.getTechDirection)
    services.get(urls.queryDropdown, {TYPE: 'NEED_ORGANIZATION'}, this.getNeedOrganization)
    services.post(urls.positionQueryList, {POSITION_PROCESS_CODE: 0, TECHNOLOGY_DIRECTION_CODE: 'WEBFRONT'}, this.getPositionQueryList)
    services.post(urls.positionProcessCount, {}, this.getPositionProcessCount)
  }
  getTechDirection = (data) => {
    this.setState({
      jobs: data
    })
  }
  getNeedOrganization = (data) => {
    this.setState({
      needOrganization: data
    })
  }
  getPositionQueryList = (data) => {
    this.setState({
      tableData: data
    })
  }
  getPositionProcessCount = (data) => {
    this.setState({
      stepsData: data
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
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }
  handleTagChange = (e, v) => {
    console.log('tag', e.target, v);
    this.state.TECHNOLOGY_DIRECTION_CODE.push(v)
    this.setState({ e })
  }
  handleSearch = ({POSITION_PROCESS_CODE, TECHNOLOGY_DIRECTION_CODE, NEED_ORGANIZATION_CODE, PRINCIPAL}) => {
    services.post(urls.positionQueryList, {
      POSITION_PROCESS_CODE: POSITION_PROCESS_CODE || this.state.tab || '',
      TECHNOLOGY_DIRECTION_CODE: TECHNOLOGY_DIRECTION_CODE || this.state.TECHNOLOGY_DIRECTION_CODE || [],
      NEED_ORGANIZATION_CODE: NEED_ORGANIZATION_CODE || this.state.NEED_ORGANIZATION_CODE || '',
      PRINCIPAL: PRINCIPAL || ''
    }, this.getPositionQueryList)
  }
  handleSelectPro = (e, {POSITION_PROCESS_CODE}) => {
    this.setState({
      tab: POSITION_PROCESS_CODE
    })
    this.handleSearch({POSITION_PROCESS_CODE: POSITION_PROCESS_CODE})
  }
  handleSelectOrg = (val) => {
    this.setState({
      NEED_ORGANIZATION_CODE: val
    });
    console.log(val);
    this.handleSearch({NEED_ORGANIZATION_CODE: val})
  }
  handleSelectPri = ({PRINCIPAL}) => {
    this.setState({
      PRINCIPAL
    });
    this.handleSearch({PRINCIPAL: PRINCIPAL})
  }
  handleAction = (tab) => {
      
  }
  render () {
    const {
      active,
      jobs,
      needOrganization,
      tableData,
      stepsData,
      tab,
    } = this.state
    const tabColums = [{
        CODE: 'PRERECRUITING',
        VALUE: '待招聘',
      }, {
        CODE: 'RECRUITING',
        VALUE: '招聘中',
      }, {
        CODE: 'STOPRECRUIT',
        VALUE: '停止招聘',
    }]
    const columns = [
      {
         title: '职位名称',
         width: 100,
         dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
         key: 'TECHNOLOGY_DIRECTION_CODE',
         fixed: 'left',
         render: (text, record, index) => record.TECHNOLOGY_DIRECTION_NAME
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
         width: 150,
         render: (text, record, index) => record.NEED_ORGANIZATION_NAME
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
         width: 150,
         render: (text, record, index) => record.EDUCATION_LEVEL_NAME
       },
       {
         title: '经验要求',
         dataIndex: 'JOB_EXPERIENCE_DEMAND_CODE',
         key: 'JOB_EXPERIENCE_DEMAND_CODE',
         width: 150,
         render: (text, record, index) => record.JOB_EXPERIENCE_DEMAND_NAME
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
         key: 'LATEST_COME_TIME',
         width: 150,
         render: (text, record, index) => dateFormat(record.LATEST_COME_TIME, 'YYYY-MM-DD')
       }, {
         title: '工作性质',
         dataIndex: 'JOB_CATEGORY_NAME',
         key: 'JOB_CATEGORY_NAME',
         width: 150
       },
       {
         title: '职位描述',
         dataIndex: 'JOB_DESC',
         key: 'JOB_DESC',
         width: 250
       },
       {
         title: '操作',
         key: 'action',
         fixed: 'right',
         width: 100,
         render: () => {
          switch (tab) {
            case 'PRERECRUITING':
              return <div>
              <a href='javascript:;' onClick={this.handleDelete}> 发布 </a>
              <Divider type='vertical' />
              <a href='javascript:;' onClick={this.handleDelete}> 更多 </a>
              </div>
            case 'RECRUITING':
              return <div>
              <a href='javascript:;' onClick={this.handleDelete}> 停止招聘 </a>
              </div>
            case 'STOPRECRUIT':
              return <div>
              <a href='javascript:;' onClick={this.handleDelete}> 编辑 </a>
              <a href='javascript:;' onClick={this.handleDelete}> 重新发布 </a>
              </div>
          }
        },
       },
    ];
    const {
       selectedRowKeys
     } = this.state;
    const rowSelection = {
       selectedRowKeys,
       onChange: this.onSelectChange,
     };
    const tabList = {
      PRERECRUITING: '',
      RECRUITING: '',
      STOPRECRUIT: '',
    }
    const actionList = {
      PRERECRUITING: '批量删除职位',
      RECRUITING: '批量停止招聘',
      STOPRECRUIT: '批量重新发布',
    }
    // <FilterStep colums={colums || []} data={stepsData || {}} handleStep={this.handleStep} active={active} />

    return (
      <div className={styles.recruit_title}>
      <div  className={classNames(styles.tab, 'mb8')}>
        <div className={styles.tabColums}>
          {
            tabColums.map((tabColum) => {
              const code = tabColum[CODE]
              return <a
                onClick={(e) => this.handleSelectPro(e, {POSITION_PROCESS_CODE: code})}
                key={code}
                className={classNames({active_bg: tab === tabColum[CODE]})}
               >
               {`${tabColum[VALUE]}`}
              <span className={classNames(styles.tabData, {active_bg: tab === tabColum[CODE]})}>&nbsp;{` (${stepsData[tabColum[CODE]] || 0}人）`}</span></a>
            })
          }
        </div>
          <Button onClick={this.handleAdd} type='primary' icon='plus' className='mr24'>添加职位</Button>
      </div>
        <SelectTag dataSource={jobs}  handleTagChange={(e, v) => this.handleTagChange(e, v)} />
        <div className={styles.switch_tab}>
          <div>
            <Button onClick={(e) => this.handleAction(tab)}>{actionList[tab]}</Button>
            <Select
              defaultValue='全部供应商'
              style={{ width: 120 }}
              onSelect={(val) => this.handleSelectOrg(val)}
              className='ml16'
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
                    options: needOrganization,
                  })
                }
            </Select>
          </div>
          <Search
            placeholder='请输入负责人姓名'
            onSearch={value => this.handleSelectPri({PRINCIPAL: value})}
            style={{ width: 260 }}
          />
        </div>
        <Table className={styles.table} rowSelection={rowSelection} columns={columns} dataSource={tableData} scroll={{ x: 1500, y: 300 }} rowKey={(record) => (record.ID)} />
      </div>
    )
  }
}
