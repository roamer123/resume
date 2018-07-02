import React from 'react';

import Card from 'components/card';
import Info from 'component/info';

import { services, urls } from 'api/index';

import styles from './index.less';

export default class User extends React.Component {
  state = {
    data: [],
    Key: 'account',
  }
  onTabChange = (key, type) => {
    // console.log(key, type);
    this.setState({ [type]: key });
  }
  componentDidMount() {
    services.get(urls.queryUserInfo, {}, this.getData);
  }
  getData = (data) => {
    this.setState({
      data: data
    })
  }
	render() {
    const data = this.state.data;
    // console.log('data', data)
    const tabList = [{
      key: 'account',
      tab: '账号信息',
    }, {
      key: 'ensure',
      tab: '认证信息',
    }, {
      key: 'authority',
      tab: '账号权限',
    }];
    const accountItems = data.map((v) => (
      <Info key={v.title} title={v.title} text={v.text} />
      ))
    const contentList = {
      account: accountItems,
      ensure: <p>ensure content</p>,
      authority: <p>authority content</p>,
    };

		return (
  <Card
    className={styles.card}
    tabList={tabList}
    activeTabKey={this.state.Key}
    onTabChange={(key) => { this.onTabChange(key, 'Key') }}
  >
    { contentList[this.state.Key] }
  </Card>
		);
	}
}
