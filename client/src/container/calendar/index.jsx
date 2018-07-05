import React from 'react'
import SearchFilter from 'component/search-filter';
import AlertInfo from 'component/alert-info';
import { Button, Table } from 'components';
import styles from './index.less'

export default class Calendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
    };
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  }
  render () {
    const filterDetail = {}
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
      <div className={styles.calendar_list}>
        <AlertInfo>此列表的候选人均已通过客户简历筛选，且在正常流程中，未被淘汰</AlertInfo>
        <div className={styles.action_area}>
          <SearchFilter columns={filterDetail} className={styles.search_filter} />
          <div>
            <Button>安排面试</Button>
            <Button className={styles.sign_button}>安排机考</Button>
            <Button className={styles.sign_button}>安排入场</Button>
          </div>
        </div>
        <Table rowSelection={rowSelection} className={styles.table} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
