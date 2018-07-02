import React from 'react';

import localStorageAuthority from 'utils/localStorageAuthority';

export default class AppIndex extends React.Component {
	componentDidMount() {
		// 从localstorerage里面获取授权
		let auth = getAuthority();
		// console.log('auth', auth);
		// 将授权信息存储到context中
	}
	render() {
		return (
  <div />
		);
	}
}
