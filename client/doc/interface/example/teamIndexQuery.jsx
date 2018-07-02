export default {
  resultCode: '000000',
  resultMesg: '成功',
  data: {
    // 工作指标
    currentCallCnt: 18, // 当前通话人力
    currentIdleCnt: 10, // 当前空闲人力
    // 业绩指标
    todayTotalCiPremium: 300000, // 当日累计车险保费
    todayTotalCiCustCnt: 20, // 当日累计车险标的数
    todayTotalCiAvgPremium: 20, // 当日累计车险件均
    todayTotalNciPremium: 30000, // 当日累计非车保费
    // 话务指标
    realtimeEffecTalktime: 0.57, // 人均实时有效通时(上一时段)
    todayTotalTalktime: 0.47, // 人均当日累计通时
    realtimeEffecTalknum: 10, // 人均实时有效通次(上一时段)
    todayTotalTalknum: 8, // 人均当日累计通次
    realtimeAvgTalktime: 0.39, // 人均实时平均通时(上一时段)
    todayTotalAvgTalktime: 0.59, // 人均当日累计平均通时
    // 上日话务情况
    perLastSumAvg: 1.23, // 人均上日累计平均通时
    perLastSumTime: 1.23, // 人均上日累计通时
    perLastSumCount: 30, // 人均上日累计通次
  }
}
