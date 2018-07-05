/*
 Navicat Premium Data Transfer

 Source Server         : mydatabase
 Source Server Type    : MySQL
 Source Server Version : 50721
 Source Host           : localhost
 Source Database       : RESUMEDATA

 Target Server Type    : MySQL
 Target Server Version : 50721
 File Encoding         : utf-8

 Date: 07/05/2018 20:37:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `DICTIONARY`
-- ----------------------------
DROP TABLE IF EXISTS `DICTIONARY`;
CREATE TABLE `DICTIONARY` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `TYPE` varchar(20) DEFAULT NULL COMMENT '类型code',
  `CODE` varchar(20) DEFAULT NULL COMMENT '编码',
  `VALUE` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '名称',
  `SORT_NO` int(11) DEFAULT NULL COMMENT '是否有child，0:否，1:有',
  `DISCRIPTION` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT 'parent_id',
  `DISABLED` int(11) DEFAULT NULL COMMENT '是否无效',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '最新修改人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '最新修改时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `DICTIONARY`
-- ----------------------------
BEGIN;
INSERT INTO `DICTIONARY` VALUES ('1', 'SYSYTEM_USERS_ROLES', 'ROLE_ADMIN', '管理员', '0', '系统管理员', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('2', 'SYSYTEM_USERS_ROLES', 'ROLE_HR', 'HR', '1', 'HR', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('3', 'SYSYTEM_USERS_ROLES', 'ROLE_INTERVIEWER', '面试官', '2', '面试官', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('4', 'SYSYTEM_USERS_CODE', 'ROLE_INTERVIEWER', '面试官', '2', '面试官', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('5', 'USER_ORGANIZATION', 'USER_LOAN', '贷款', '2', '组织为贷款', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('6', 'USER_ORGANIZATION', 'USER_WSHH', '文思海辉', '2', '组织为文思海辉', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('7', 'INTERVIEWER_PROCESS', 'PROCESS_NEW', '新增候选人', '1', '当前候选人进度新增候选人', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('8', 'INTERVIEWER_PROCESS', 'PROCESS_FIRST', '初选通过', '2', '当前候选人进度初选通过', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('9', 'INTERVIEWER_PROCESS', 'PROCESS_SELF', '内面', '3', '当前候选人进度内面', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('10', 'INTERVIEWER_PROCESS', 'PROCESS_CUSTOME', '客户简历筛选', '4', '当前候选人进度客户简历筛选', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('11', 'INTERVIEWER_PROCESS', 'PROCESS_INTERVIEW', '面试', '5', '当前候选人进度面试', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('12', 'INTERVIEWER_PROCESS', 'PROCESS_TEST', '机考', '6', '当前候选人进度机考', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('13', 'INTERVIEWER_PROCESS', 'PROCESS_PASS', '入场', '7', '当前候选人进度入场', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('14', 'INTERVIEWER_PROCESS', 'PROCESS_OUT', '已淘汰', '8', '当前候选人进度已淘汰', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('15', 'INTERVIEWER_STATUS', 'STATUS_NO_NEED', '无需求', '0', '当前无需求', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('16', 'INTERVIEWER_STATUS', 'STATUS_NO_PASS', '不符合', '0', '当前候选人不符合已淘汰', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('17', 'INTERVIEWER_STATUS', 'STATUS_HIGHPAY', '薪资过高', '0', '当前候选人薪资要求过高', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('18', 'INTERVIEWER_STATUS', 'STATUS_GIVEUP', '放弃', '0', '当前候选人放弃', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('19', 'INTERVIEWER_STATUS', 'STATUS_DOING', '进行中', '0', '当前候选人进行中', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('20', 'INTERVIEWER_STATUS', 'STATUS_SUCCESS', '成功入场', '0', '当前候选人成功入场', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('21', 'JOB_CATEGORY', 'JOB_TRAIN', '实习', '0', '应聘实习', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('22', 'JOB_CATEGORY', 'JOB_PART_TIME', '兼职', '0', '应聘兼职', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('23', 'JOB_CATEGORY', 'JOB_FULL_TIME', '全职', '0', '应聘全职', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('24', 'RANK_LEVEL', 'LEVEL_ASSISTANT', '助理', '0', '招聘职级助理', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('25', 'RANK_LEVEL', 'LEVEL_PRIMARY', '初级', '0', '招聘职级初级', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('26', 'RANK_LEVEL', 'LEVEL_MIDDLE', '中级', '0', '招聘职级中级', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000'), ('27', 'RANK_LEVEL', 'LEVEL_HIGH', '高级', '0', '招聘职级高级', '0', 'system', '2018-07-05 20:36:13.000000', 'system', '2018-07-05 20:36:13.000000');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
