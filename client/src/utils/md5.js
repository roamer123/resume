/*
* @Author: lulu27753
* @Date:   2018-04-30 08:53:39
* @Last Modified by:   lulu27753
* @Last Modified time: 2018-04-30 08:54:20
*/
const utility = require('utility');
module.exports = {
	md5pwd: function (pwd) {
		const salt = 'qwertyuiopasdfghjklzxcvbnm'
		return utility.md5(utility.md5(pwd + salt))
	}
}
