import React from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router';
// 将非路由组件传入到withRouter高阶组件以获得{ match, location, history }等对象属性

import services from 'api/services';
import urls from 'api/urls';

import Authorized, { setAuthority } from 'utils/localStorageAuthority';



class LoginAuth extends React.Component {
	componentDidMount() {
		// 现在的URL地址，login页面则是不需要跳转的
		const publicList = ['/login'];
		const pathName = this.props.location.pathname;
		// // console.log(pathName);
		if (publicList.indexOf(pathName) > -1) {
			return null;
		} else {
			// 获取用户信息
			services.get(urls.login, {um: values.username, pwd: values.password}, this.auth)
			Axios.get('user/info').then(res => {
				if (res.status === 200) {
					// // console.log(res.data)// @TODO SHANCHU
					// 是否登录
					if (res.data.code === 0) {
						// 已登录
						// // console.log(res.data.data)
						this.props.loadData(res.data.data);
						// 将授权信息放到localstorage
						setAuthority(res)
					} else {
						// 未登录
						this.props.history.push('/login')
					}
				}
			})
		}
	}
	render() {
		return null;
	}
}

export default withRouter(LoginAuth);
