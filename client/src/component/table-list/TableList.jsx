import React from 'react';

import Card from 'components/card';
import Table from 'components/table';

import styles from './index.less';
 import { services } from 'api/index';


export default class TableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: this.columns(),
      dataSource: props.dataSource,
      pagination: {
        showQuickJumper: true,
        defaultCurrent: 1,
        total: 21,
        defaultPageSize: 4
      }
    }
  }

  componentWillMount() {
    // services.get(urls.queryUserInfo, {}, this.getData);
    //     // const url = 'http://10.43.40.18:7001'
    // url, params, resolve, reject
    services.post('http://10.43.62.147:7001/resumeInfo/query', null, this.getData)
  }

  getData(data) {
    console.log('data', data)
  }
  // 分页 change
  onChange(pagination, filters, sorter) {
  }

  // 删除
  handleDelete(key) {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
      pagination: {
        total: dataSource.length - 1,
      }
    })
  };
  // 配置项
    columns() {
     return [{
        title: '姓名',
        dataIndex: 'name',
         align: 'center',
        render: (text, obj) => {
          return (
            <a href='javascript:;' onClick={() => this.props.handleChange(obj.key)}>{text}</a>
          )
        }
      },
      {
        title: '角色',
        dataIndex: 'role',
        align: 'center'
      },
      {
        title: '公司',
        dataIndex: 'company',
        align: 'center'
      }, {
        title: '职位',
        dataIndex: 'position',
        align: 'center'
      }, {
        title: '部门',
        dataIndex: 'department',
        align: 'center'
      }, {
        title: '电话',
        dataIndex: 'telephone',
        align: 'center'
      }, {
        title: '邮箱',
        dataIndex: 'email',
        align: 'center'
      }, {
        title: '账号',
        dataIndex: 'account',
        align: 'center'
      }, {
        title: '密码',
        dataIndex: 'password',
        align: 'center'
      }, {
        title: '操作',
        dataIndex: 'action',
        align: 'center',
        render: (text, obj) => {
            return (
              <span>
                <a href='javascript:;' className={styles.tableList_change} onClick={() => this.props.handleChange(obj.key)}>更改</a>
                <a href='javascript:;' onClick={() => this.handleDelete(obj.key)}>删除</a>
              </span>
            )
        }
      }]
    }

    render() {
      const {columns, dataSource, pagination} = this.state;
        return (
          <div>
            <Card className={styles.card_warp}>
              <Table
                bordered
                columns={columns}
                dataSource={dataSource}
                onChange={this.onChange}
                pagination={pagination}
                />
            </Card>
          </div>
        )
    }
};
