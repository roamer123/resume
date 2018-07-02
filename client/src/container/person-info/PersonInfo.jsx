import React from 'react';

// import Card from 'components/card';
import TitleHeader from 'component/title-header';
import TagSift from 'component/tag-sift';
import TableList from 'component/table-list';
import SelfModal from 'component/self-modal';

// import styles from './index.less';

export default class PersonInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  dataSource () {
    let hrData = [];
    for (let i = 1; i < 21; i++) {
        hrData.push({
                key: i,
                name: `hr_${i}`,
                role: 'hr',
                company: '文思海辉',
                department: '',
                telephone: '13271096680',
                email: 'lhb_leo@163.com',
                account: 'lhb',
                password: '123456',
                action: '操作',
            })
    }
    return [...hrData]
  };

  handleChange(obj) {
    this.setState({
      visible: true
    })
  };
    render() {
      const dataSource = this.dataSource();
      const { visible } = this.state;
        return (
          <div>
            <TitleHeader title='人员信息查询' />
            <TagSift />
            <TitleHeader title='查询结果' />
            <TableList dataSource={dataSource} handleChange={obj => this.handleChange(obj)} />
            <SelfModal visible={visible} />
          </div>
        )
    }
};

