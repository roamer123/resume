import React from 'react'
import SearchFilter from 'component/search-filter';
import AlertInfo from 'component/alert-info';
import FormInfo, { generator, Submit } from 'component/form-info';
import {
  Button,
  Table,
  Modal,
  Card,
  Alert,
  Input,
  Select,
  DatePicker
} from 'components';
import styles from './index.less'


const steps = ['面试', '机考', '入场', '取消原因']
export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      modalVisible: false,
      step: 0, // 0-安排面试，1-安排机考，2-安排入场
      Key: '0',
    };
  }
  onTabChange = (key, type) => {
    // console.log(key, type);
    this.setState({
      [type]: key,
      step: key,
    });
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }
  handleOk = () => {
    this.handleModal()
    console.log('handleOk')
  }
  handleCancel = () => {
    this.handleModal()
    console.log('handleCancel')
  }
  handleModal = () => {
    this.setState((state) => ({
      modalVisible: !state.modalVisible
    }))
  }
  modalLabelGenerator = (step) => {
    let modalLabel = {}
    console.log('modalLabelGenerator', step)
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
  handleAction = (step) => {
    this.handleModal()
    this.setState({
      step: step
    })
    console.log('handleAction', step)
  }
  handleDelete = (step) => {

  }
  render () {
    const { step } = this.state;
    const filterDetail = {}
    const columns = {
      0: [
        {
          title: '姓名',
          width: 100,
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION',
          key: 'NEED_ORGANIZATION',
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
          title: `预约面试时间`,
          dataIndex: 'APPOINTMENT_INTERVIEWER_TIME',
          key: 'APPOINTMENT_INTERVIEWER_TIME',
          width: 150
        },
        {
          title: `实际面试时间`,
          dataIndex: 'ACTUAL_INTERVIEWER_TIME',
          key: 'ACTUAL_INTERVIEWER_TIME',
          width: 150
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
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION',
          key: 'NEED_ORGANIZATION',
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
          key: '7',
          width: 150,
        }
    ],
      2: [
        {
          title: '姓名',
          width: 100,
          dataIndex: 'NAME',
          key: 'NAME',
        },
        {
          title: '需求方',
          width: 100,
          dataIndex: 'NEED_ORGANIZATION',
          key: 'NEED_ORGANIZATION',
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
          dataIndex: 'APPINT_ENTRANCE_TIME',
          key: 'APPINT_ENTRANCE_TIME',
          width: 150
        },
        {
          title: '实际入场时间',
          dataIndex: 'ACTUAL_ENTRANCE_TIME',
          key: 'ACTUAL_ENTRANCE_TIME',
          width: 150
        },
        {
          title: '核定级别',
          dataIndex: 'RANK_LEVEL_CODE',
          key: 'RANK_LEVEL_CODE',
          width: 150,
        }
    ],
    };

    const data = [];
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
    const contentList = (step) => ([
      <Button type='primary' onClick={() => this.handleAction(step)} key={`${step}_button`}>{`安排${steps[step]}`}</Button>,
      <Button onClick={() => this.handleAction(3)} style={{marginLeft: '16px'}} key={`${step}_delete`}>删除</Button>,
      <Table
        rowSelection={rowSelection}
        className={styles.table}
        columns={columns[step]}
        dataSource={data}
        // scroll={{ x: 1500, y: 300 }}
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
        <AlertInfo>此列表的候选人均已通过客户简历筛选，且在正常流程中，未被淘汰，也还没有成功入场。</AlertInfo>
        <div className={styles.action_area}>
          <SearchFilter columns={filterDetail} className={styles.search_filter} />
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
              {/* <Submit className='saveButton'>仅保存</Submit>
              <Submit className='saveButton'>保存并添加候选人</Submit> */}
            </FormInfo>
          </Modal>
        </div>
        <Card
          className={styles.card}
          tabList={tabList}
          activeTabKey={this.state.Key}
          onTabChange={(key) => { this.onTabChange(key, 'Key') }}
        >
          { contentList(this.state.Key) }
        </Card>
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

