export default {
    resultCode: '000000',
    resultMesg: '成功',
    data: {
        userType: '团队长', // 用于授权路由跳转
        msg: '',// 如果授权成功则为空,授权失败则将具体错误信息返回，如“账号或密码错误”
        um: 'chenmaoping001' // 如果授权成功则将um账号返回，如果不成功则为空
    }
}
