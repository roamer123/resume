/*
* @Author: lulu27753
* @Date:   2018-04-16 14:42:32
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-10 21:22:42
* 用于统一管理域名
*/
import resume from './routers/resume'
import User from './routers/user' // 第一步：导入
// import _ from 'lodash'

// 判断当前是否处于开发环境
const _DEV_ = (process.env.NODE_ENV || 'development') === 'development';
// 判断当前是否处于测试环境
// const _STG_ = (process.env.NODE_ENV || 'staging') === 'staging';
// 判断当前是否处于生产环境
const _PRD_ = (process.env.NODE_ENV || 'production') === 'production';

const urlModules = [resume, User]; // 第二步：将导入模块引入
// console.log('urls', urls);


function initHostname() {
	if (_DEV_) {
		// 用于本地开发测试
		return {
			// domainName: `http://localhost:8080/mock`,
			//  domainName: `http://172.31.24.3:7001`, // XUMIN
			// domainName: `http://172.31.8.117:7001`, // JUNQIANG
			domainName: `http://localhost:7001`,
			// suffix: '.json',
			suffix: '',
			// mock数据中间地址
			mockAdd: '',
			userUrl: '',
		}
	}
	if (_PRD_) {
		// 用于生产环境
		return {
			domainName: ``,
			suffix: '',
			// mock数据中间地址
			mockAdd: '',
			userUrl: '',
		}
	}
}

// 初始化域名
const hostname = initHostname();

const urls = {}

urlModules.map((v) => (
  Object
    .keys(v)
    .forEach(function (key) {
    urls[key] = `${hostname.domainName}${v[key]}${hostname.suffix}`
  })
))
// console.log('urls', urls);
// _.mapKeys(resume, function(value, key) {
// 	urls[key] = hostname.domainName + value + (hostname.suffix || '')
// })

export { hostname }
export default urls
