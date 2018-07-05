import React from 'react'
import {Table, Button} from 'components'
import FilterStep from 'component/filter-step';
import styles from './index.less'
export default class RecruitTitle extends React.Component {
  handleStep = (e, step, li) => {
    e.target.style = {
      color: 'red'
    }
    console.log(e.target, step, li)
  }
  handleAdd = () => {
    window.location.href = `${window.location.href}/add`
  }
  render () {
    const filters = {
      recruiting: 0,
      stopRecruit: 1,
    }
    const stepsMap = {
      recruiting: '招聘中',
      stopRecruit: '停止招聘',
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
    return (
      <div className={styles.recruit_title}>
        <FilterStep filters={filters} stepsMap={stepsMap} handleStep={this.handleStep} />
        <div className={styles.switch_tab}>
          <Button onClick={this.handleAdd}>添加招聘职位</Button>
        </div>
        <Table className={styles.table} columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    )
  }
}
