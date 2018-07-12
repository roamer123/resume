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

 Date: 07/09/2018 15:52:00 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `CANDIDATE`
-- ----------------------------
DROP TABLE IF EXISTS `CANDIDATE`;
CREATE TABLE `CANDIDATE` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '姓名',
  `TECHNOLOGY_DIRECTION_CODE` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '技术方向code',
  `WORK_AGE` varchar(10) DEFAULT NULL COMMENT '工作年限',
  `OFFICIAL_ACADEMIC_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '最高学历',
  `RANK_LEVEL_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '级别code',
  `TELEPHONE` varchar(20) DEFAULT NULL COMMENT '电话',
  `EMAIL` varchar(20) DEFAULT NULL COMMENT '邮箱',
  `CURRENT_SALARY` varchar(20) DEFAULT NULL COMMENT '目前薪资（税前）',
  `EXPECT_SALARY` varchar(20) DEFAULT NULL COMMENT '期望薪资（税前）',
  `IS_ON_JOB` varchar(10) DEFAULT NULL COMMENT '是否在职,0:否，1:是',
  `ADDRESS` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '地点',
  `INTERVIEWER_PROCESS_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '目前进度',
  `INTERVIEWER_STATUS` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '状态',
  `ORGANIZATION_CODE` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '供应商名称／组织名称',
  `INTERVIEWER` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试官／助理',
  `INNER_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '内面时间',
  `APPOINTMENT_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '预约面试时间',
  `ACTUAL_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '实际面试时间',
  `COMPUTER_EXAME_TIME` datetime(6) DEFAULT NULL COMMENT '机考时间',
  `APPINT_ENTRANCE_TIME` datetime(6) DEFAULT NULL COMMENT '约定入场时间',
  `ACTUAL_ENTRANCE_TIME` datetime(6) DEFAULT NULL COMMENT '实际入场时间',
  `CHECK_RANK_LEVEL_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '核定级别CODE',
  `RECOMMEND_TIME` datetime(6) DEFAULT NULL COMMENT '推荐时间',
  `RECRUIT_TRACKER` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '招聘跟踪人',
  `RECOMMEND_PROGRAME` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '推荐项目',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  `INTERVIEW_ADDRESS` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试地址',
  `CUSTOMER_MANAGER` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '客户经理',
  `REMARK` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
