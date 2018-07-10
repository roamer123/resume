import React from 'react';
import { withRouter } from 'react-router';
// 将非路由组件传入到withRouter高阶组件以获得{ match, location, history }等对象属性
import BasicLayout from './BasicLayout';
import {getRouterData} from '../../router/router.jsx';
import data from '../../data';

class BasicLayoutPage extends React.Component {
	render() {
		// // console.log('BasicLayout', this.props);
		const routerData = getRouterData();
		// console.log('routerData', routerData);
		const currentUser = {
			avatar: '',
			name: 'admin',
			notifyCount: 12,
			userid: '00000001ß'
    }
		return (
  <BasicLayout
    {...this.props}
    collapsed={false}
    routerData={routerData}
    currentUser={currentUser}
    systemName={data.common.systemName}
        />
		);
	}
}
export default withRouter(BasicLayoutPage);
