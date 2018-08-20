import React from 'react'
// import PropTypes from 'prop-types';
import FormInfo, { generator } from 'component/form-info';
import { services, urls } from 'api';

import {
  // Button,
  Table,
  Modal,
  Card,
  Alert,
  Input,
  DatePicker,
  Radio,
  Divider,
} from 'components';
import styles from './index.less'

const RangePicker = DatePicker.RangePicker;
const RadioGroup = Radio.RadioGroup;
const RadioButton = Radio.RadioButton;
const Search = Input.Search;

const steps = ['面试', '机考', '入场', '取消原因']
const CODE = ['CALANDAR_INTERVIEW', 'CALANDAR_EXAM', 'CALANDAR_IN']

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      modalVisible: false,
      step: '', // 0-安排面试，1-安排机考，2-安排入场
      key: '0',
      queryParam: {
        STATE: '',
      },
      data: [],
    };
  }
  componentDidMount () {
    this.setState({
      step: 0
    })
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('this.state.step', this.state.step, 'nextState.step', nextState.step);

    if (this.state.step !== nextState.step || this.state.queryParam !== nextState.queryParam) {
      const url = CODE[nextState.step]
      services.post(urls[url], Object.assign({
        ORGANIZATION_CODE: 'SUPPLIER_WSHH'
      }, nextState.queryParam), this.getData)
    }
    return true
  }

  getData = (data) => {
    // console.log('getData', data);
    this.setState({
      data
    })
  }
  // 切换tab页
  onTabChange = (key, type) => {
    this.setState({
      [type]: key,
      step: key,
    });
  }
  // table选择行
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }
  // 查询条件变更
  queryParamChange = (type, value) => {
    this.setState({
      queryParam: Object.assign({}, this.state.queryParam, {
        [type]: value,
      })});
  }
  // modal弹出框确认
  handleOk = () => {
    this.handleModal()
    console.log('handleOk')
  }
  // modal弹出框取消
  handleCancel = () => {
    this.handleModal()
    console.log('handleCancel', this.state.modalVisible)
  }
  // modal框处理
  handleModal = () => {
    this.setState((state) => ({
      modalVisible: !state.modalVisible
    }))
  }
  modalLabelGenerator = (step) => {
    let modalLabel = {}
    // console.log('modalLabelGenerator', step)
    switch (parseInt(step)) {
      case 0:
        modalLabel = {
          NAME: '候选人',
          APPOINTMENT_INTERVIEWER_TIME: '预约面试日期',
          INTERVIEWER: '面试官',
          INTERVIEW_ADDRESS: '地址',
        }
        return modalLabel;
      case 1:
        // 面试通过方可安排机考
        modalLabel = {
          CHECK_RANK_LEVEL_CODE: '面试核定级别',
          COMPUTER_EXAME_TIME: '机考日期',
        }
        return modalLabel;
      case 2:
      // 机考通过方可安排入场
        modalLabel = {
          APPINT_ENTRANCE_TIME: '预约入场日期',
        }
        return modalLabel;
      default:
        return modalLabel;
    }
  }

  render () {
    const { step, data } = this.state;
    // const filterDetail = {}
    const statusMap = {
      '0': '未安排',
      '1': '已安排',
      '2': '未通过',
    };

    const columns = {
      0: [
        {
          title: '姓名',
          width: 100,
          dataIndex: 'INTERVIEWEE',
          key: 'INTERVIEWEE',
        },
        {
          title: '应聘职位',
          width: 100,
          dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
          key: 'TECHNOLOGY_DIRECTION_CODE',
          render: (text, record, index) => record.TECHNOLOGY_DIRECTION_NAME
        },
        {
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION_CODE',
          key: 'NEED_ORGANIZATION_CODE',
          render: (text, record, index) => record.NEED_ORGANIZATION_NAME
        },
        {
          title: '客户经理',
          width: 100,
          dataIndex: 'CUSTOMER_MANAGER',
          key: 'CUSTOMER_MANAGER',
        },
        {
          title: '招聘跟踪人',
          dataIndex: 'RECRUIT_TRACKER',
          key: 'RECRUIT_TRACKER',
          width: 100
        },
        {
          title: `预约面试时间`,
          dataIndex: 'APPOINTMENT_INTERVIEWER_TIME',
          key: 'APPOINTMENT_INTERVIEWER_TIME',
          width: 150,
          render: (text, record, index) => record.APPOINTMENT_INTERVIEWER_TIME && record.APPOINTMENT_INTERVIEWER_TIME.slice(0, 19)
        },
        {
          title: `实际面试时间`,
          dataIndex: 'ACTUAL_INTERVIEWER_TIME',
          key: 'ACTUAL_INTERVIEWER_TIME',
          width: 150,
          render: (text, record, index) => record.NEED_ORGANIZATION_NAME
        },
        {
          title: `面试官`,
          dataIndex: 'INTERVIEWER',
          key: 'INTERVIEWER',
          width: 100
        },
        {
          title: `面试结果`,
          dataIndex: 'STATUS',
          key: 'STATUS',
          width: 100,
          render: (text, record, index) => {
            return statusMap[record.STATUS];
          }
        },
        {
          title: `面试地址`,
          dataIndex: 'INTERVIEW_ADDRESS',
          key: 'INTERVIEW_ADDRESS',
          width: 100
        },
        {
          title: `备注`,
          dataIndex: 'REMARK',
          key: 'REMARK',
          width: 100
        },
        {
          title: `操作`,
          dataIndex: 'OPERATION',
          key: 'OPERATION',
          width: 120,
          fixed: 'right',
          render: (text, record, index) => {
            return (
              <div>
                {record.STATUS === 0 && <a>安排面试</a>}
                {record.STATUS === 1 && [<a key={1}>机考面试</a>,
                <Divider key={2} type='vertical' />,
                <a key={3}>取消</a>]}
              </div>
            );
          }
        },
    ],
      1: [
        {
          title: '姓名',
          width: 100,
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: '招聘职位',
          width: 100,
          dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
          key: 'TECHNOLOGY_DIRECTION_CODE',
          render: (text, record, index) => record.TECHNOLOGY_DIRECTION_NAME
        },
        {
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION_CODE',
          key: 'NEED_ORGANIZATION_CODE',
          render: (text, record, index) => record.NEED_ORGANIZATION_NAME
        },
        {
          title: '客户经理',
          width: 100,
          dataIndex: 'CUSTOMER_MANAGER',
          key: 'CUSTOMER_MANAGER',
        },
        {
          title: '招聘跟踪人',
          dataIndex: 'RECRUIT_TRACKER',
          key: 'RECRUIT_TRACKER',
          width: 150
        },
        {
          title: '机考时间',
          dataIndex: 'COMPUTER_EXAME_TIME',
          key: 'COMPUTER_EXAME_TIME',
          width: 150
        },
        {
          title: '核定级别',
          dataIndex: 'RANK_LEVEL_CODE',
          key: 'RANK_LEVEL_CODE',
          width: 150,
          render: (text, record, index) => record.RANK_LEVEL_NAME
        },
        {
          title: `备注`,
          dataIndex: 'REMARK',
          key: 'REMARK',
          width: 100
        },
        {
          title: `操作`,
          dataIndex: 'OPERATION',
          key: 'OPERATION',
          width: 100,
          fixed: 'right',
          render: (text, record, index) => {
            return (
              <div>
                {record.STATUS === 0 && <a>安排机考</a> }
                {record.STATUS === 1 && [<a key={1}>机考结果</a>,
                  <Divider key={2} type='vertical' />,
                  <a key={3}>取消</a>]}
              </div>
            );
          }
        },
      ],
      2: [
        {
          title: '姓名',
          width: 100,
          dataIndex: 'INTERVIEWEE',
          key: 'INTERVIEWEE',
        },
        {
          title: '应聘职位',
          width: 100,
          dataIndex: 'TECHNOLOGY_DIRECTION_CODE',
          key: 'TECHNOLOGY_DIRECTION_CODE',
          render: (text, record, index) => record.TECHNOLOGY_DIRECTION_NAME
        },
        {
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION_CODE',
          key: 'NEED_ORGANIZATION_CODE',
          render: (text, record, index) => record.NEED_ORGANIZATION_NAME
        },
        {
          title: '客户经理',
          width: 100,
          dataIndex: 'CUSTOMER_MANAGER',
          key: 'CUSTOMER_MANAGER',
        },
        {
          title: '招聘跟踪人',
          dataIndex: 'RECRUIT_TRACKER',
          key: 'RECRUIT_TRACKER',
          width: 150
        },
        {
          title: '约定入场时间',
          dataIndex: 'APPOINTMENT_INTERVIEWER_TIME',
          key: 'APPOINTMENT_INTERVIEWER_TIME',
          width: 150
        },
        {
          title: '实际入场时间',
          dataIndex: 'ACTUAL_INTERVIEWER_TIME',
          key: 'ACTUAL_INTERVIEWER_TIME',
          width: 150
        },
        {
          title: '核定级别',
          dataIndex: 'RANK_LEVEL_CODE',
          key: 'RANK_LEVEL_CODE',
          width: 150,
          render: (text, record, index) => record.RANK_LEVEL_NAME
        },
        {
          title: `备注`,
          dataIndex: 'REMARK',
          key: 'REMARK',
          width: 100
        },
        {
          title: `操作`,
          dataIndex: 'OPERATION',
          key: 'OPERATION',
          width: 100,
          fixed: 'right',
          render: (text, record, index) => {
            return (
              <div>
                {record.STATUS === 0 && <a>安排入场</a>}
                {record.STATUS === 1 && [<a key={1}>入场结果</a>,
                  <Divider key={2} type='vertical' />,
                  <a key={3}>取消</a>]}
              </div>
            );
          }
        },
    ],
    };
    // console.log('datarender', data);
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const tabList = [{
        key: '0',
        tab: ' 面试 ',
      }, {
        key: '1',
        tab: ' 机考 ',
      }, {
        key: '2',
        tab: ' 入场 ',
    }];

    const radioList = [{
        value: '',
        text: '全部'
      }, {
        value: 0,
        text: '未安排'
      }, {
        value: 1,
        text: '已安排'
      }, {
        value: 2,
        text: '未通过'
      }]
    const contentList = (step) => ([
      <Table
        rowSelection={rowSelection}
        className={styles.table}
        columns={columns[step]}
        dataSource={data}
        scroll={{ x: 1500, y: 300 }}
        key={`${step}_table`} />
    ]);
    const modalLabel = this.modalLabelGenerator(step)
    const dataMap = modalLabel
    // console.log('dataMap', dataMap)
    map = {}
    generatorParams(dataMap)
    // generatorParams(selectDataMap, Select, false, '请选择')
    // generatorParams(DatePicker, DatePicker, false, '请选择')
    const Info = {};
    Object.keys(map).forEach((item) => {
      Info[item] = generator({
        defaultProps: map[item].props,
        defaultRules: map[item].rules,
        type: item,
        title: dataMap[item],
        width: '100%',
      })(map[item].component)
    })
    return (
      <div className={styles.calendar_list}>
        <div style={{ lineHeight: '36px', verticalAlign: 'middle' }}>
          <RangePicker onChange={(date, dateString) => { this.queryParamChange('RANGE_DATE', dateString); }}
            style={{ width: '300px', marginRight: '18px' }}
          />
          <RadioGroup onChange={(e) => { this.queryParamChange('STATE', e.target.value); }} defaultValue='0' >
            {
              radioList.map((item, index) => {
                if (item.value === 2) {
                  return '' + step === '0' && <RadioButton key={index} value={item.value}>{item.text}</RadioButton>;
                }
                return <RadioButton key={index} value={item.value}>{item.text}</RadioButton>;
              })
            }
          </RadioGroup>
      </div>
      <div className={styles.action_area}>
        {/* <SearchFilter columns={filterDetail} className={styles.search_filter} /> */}
        <Modal title={this.state.step === 3 ? `${steps[this.state.step]}` : `安排${steps[this.state.step]}`} visible={this.state.modalVisible}
          onOk={this.handleOk} onCancel={this.handleCancel} width={800} key={`${this.state.step}_modal`}>
          <FormInfo
            onSubmit={this.onSubmit}
            className='content'
          >
            {
              this.state.notice &&
              <Alert style={{ marginBottom: 24 }} message={this.state.notice} type='error' showIcon closable />
            }
            {
              Object.keys(Info).map((item, i) => React.createElement(Info[item], {key: `${step}_${i}`, name: item}))
            }
          </FormInfo>
        </Modal>
      </div>
      <div style={{ position: 'relative' }}>
        <Search
          placeholder='快速检索..'
          onSearch={(value) => { console.log('value', value); this.queryParamChange('QUERY', value); }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            width: '200px',
          }}
        />
        <Card
          className={styles.card}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => { this.onTabChange(key, 'key') }}
        >
          { contentList(this.state.key) }
        </Card>
      </div>
    </div>
    )
  }
}

let map = {}
function generatorParams(data, component, required, placeholder) {
  Object.keys(data).forEach(item => {
    map[item] = {
      component: component || Input,
      props: {
        size: 'large',
        placeholder: placeholder || '请输入',
        name: item,
      },
      rules: (!required && '') || [{
        required: true,
        message: '请输入必填项！',
      }],
    }
  });
}
