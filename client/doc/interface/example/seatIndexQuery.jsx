export default {
    resultCode: '000000',
    resultMesg: '成功',
    data: {
        // 基本信息
        tmrName: '大大', // 姓名
        onboardAge: 3, // 司龄
        tmrType: 'ib', // 坐席业务模式
        positionName: 'A类坐席', // 坐席职级描述
        // 当日工作情况
        isActive: 1, // 坐席活跃状态，0非活跃，1活跃
        // 当日业绩情况
        todayTotalCiPreminm: 234, // 当天累计车险保费
        securityThroughCustCnt: 124, // 当日累计核保通过客户数
        todayTotalNciPremium: 234, // 当日累计非车保费
        // 当日话务状态
        refaltimeEffecTalkTime: 22.23, // 实时有效通时
        todayTotalTalkTime: 23.34, // 当日累计通时
        refaltimeEffecTalkNum: 23, // 实时累计通次
        todayTotalTalkNum: 23, // 当日累计通次
        refaltimeAvgTalkTime: 22.23, // 实时平均通时
        todayTotalAvgTalkTime: 23.34, // 当日平均通时
        // 上日话务情况
        lastSumAvg: 34.22, // 上日累计平均通时
        lastSumTime: 333.12, // 上日累计通时
        lastSumCount: 23, // 上日累计通次
    }
}
