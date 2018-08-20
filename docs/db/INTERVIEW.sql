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

 Date: 08/20/2018 15:40:29 PM
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
  `INTERVIEWEE` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `INTERVIEWER` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试官／助理',
  `TECHNOLOGY_DIRECTION_CODE` varchar(50) DEFAULT NULL,
  `RECRUIT_TRACKER` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `APPOINTMENT_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '预约时间',
  `ACTUAL_INTERVIEWER_TIME` datetime(6) DEFAULT NULL COMMENT '实际面试时间',
  `INTERVIEW_ADDRESS` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '面试地址',
  `CUSTOMER_MANAGER` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '客户经理',
  `ORGANIZATION_CODE` varchar(50) DEFAULT NULL COMMENT '供应商名称CODE／组织名称CODE',
  `NEED_ORGANIZATION_CODE` varchar(50) DEFAULT NULL COMMENT '需求方组织CODE',
  `STATUS` tinyint(4) DEFAULT '0' COMMENT '0未安排面试，1已安排面试, 2未通过',
  `REMARK` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建者',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新者',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `INTERVIEW`
-- ----------------------------
BEGIN;
INSERT INTO `INTERVIEW` VALUES ('1', '1', '王大胖', '陈小敏', 'JAVASCRIPT', '小敏', '2018-08-12 04:00:00.000000', '2018-08-12 04:00:00.000000', '张江', '陈小敏', 'SUPPLIER_WSHH', 'NEED_ZGPA', '0', null, null, '2018-08-09 06:57:52.000000', null, '2018-08-09 07:05:03.000000'), ('2', '2', '李大头', '陈小敏', 'JAVASCRIPT', '小敏', '2018-08-12 04:00:00.000000', '2018-08-12 04:00:00.000000', '张江', '陈小敏', 'SUPPLIER_WSHH', 'NEED_ZGPA', '0', null, null, '2018-08-09 07:04:28.000000', null, '2018-08-09 07:37:09.000000');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
