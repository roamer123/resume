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

 Date: 08/06/2018 17:16:04 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `INTERVIEW`
-- ----------------------------
DROP TABLE IF EXISTS `INTERVIEW`;
CREATE TABLE `INTERVIEW` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `CANDIDATE_ID` int(11) DEFAULT NULL,
  `INTERVIEWER` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试官／助理',
  `APPOINTMENT_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '预约时间',
  `ACTUAL_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '实际面试时间',
  `INTERVIEW_ADDRESS` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试地址',
  `CUSTOMER_MANAGER` varchar(50) CHARACTER SET utf8 DEFAULT NULL OMMENT '客户经理',
  `ORGANIZATION_CODE` varchar(50) DEFAULT NULL COMMENT '供应商名称CODE／组织名称CODE',
  `NEED_ORGANIZATION_CODE` varchar(50) DEFAULT NULL COMMENT '需求方组织CODE',
  `STATUS` tinyint(4) DEFAULT NULL COMMENT '0未安排面试，1已安排面试',
  `REMARK` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建者',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新者',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
