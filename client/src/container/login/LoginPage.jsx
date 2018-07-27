import React from 'react';
import { Redirect } from 'react-router-dom';

import Alert from 'components/alert';
import Checkbox from 'components/checkbox';

import Login from 'component/login';

import Image from 'assets/images/logo.png';
import {
  getAuthority,
  setOrganization,
} from 'utils/localStorageAuthority';

import {services, urls} from 'api';

// import data from '../../data';
import styles from './index.less';


const { UserName, Password, Submit } = Login;
export default class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notice: '',
			autoLogin: true,
		    username: '',
		    password: '',
		    redirectTO: '',
		}
	}
	componentDidMount() {
		// console.log(this.props.history);
		const auth = getAuthority();
		console.log(auth)
  }
  onSubmit = (err, values) => {
    if (!err) {
      services.post(urls.login, {
        // grant_type: 'password',
        username: values.username,
        password: values.password,
        // autoLogin: this.state.autoLogin
      }, this.authSuccess)
    }
  }
	authSuccess = ({ORGANIZATION_CODE, msg}) => {
    // 如果登陆成功，则将供应商编号ORGANIZATION_CODE存入localStorage
    setOrganization(ORGANIZATION_CODE)
		// if (ORGANIZATION_CODE && !msg) {
		if (ORGANIZATION_CODE && getAuthority()) {
			// console.log('um', um)
			this.setState({
				redirectTO: '/dashboard',
			})
		} else {
			this.setState({
			notice: '',
			},
			() => {
					this.errorMsg(msg)
			}
		)
		}
	}
	errorMsg = (message) => {
		// console.log('message', message);
		this.setState({
			notice: message
		})
	}

	changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
	}
	handleChange(key, value) {
    this.setState({
      // 一定要加中括号，不然就变成字符串了
      [key]: value,
    });
	}
	render() {
return this.state.redirectTO ? <Redirect to={this.state.redirectTO} /> : (
  <div className={styles.loginpage}>
    <div className={styles.header}>
      <img src={Image} alt='' />
      {/* <span>{data.common.systemName}</span> */}
    </div>
    <Login
      onSubmit={this.onSubmit}
      className='content'
			>
      {
				this.state.notice &&
				<Alert style={{ marginBottom: 24 }} message={this.state.notice} type='error' showIcon closable />
			}
      <UserName name='username' onChange={value => this.handleChange('username', value)} />
      <Password name='password' onChange={value => this.handleChange('password', value)} />
      <div>
        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
        <a style={{ float: 'right' }} href=''>忘记密码</a>
      </div>
      <Submit className='loginButton'>登录</Submit>
    </Login>
  </div>
		);
	}
};
