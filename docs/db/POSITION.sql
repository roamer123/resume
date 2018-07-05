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

 Date: 07/05/2018 20:37:31 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `POSITION`
-- ----------------------------
DROP TABLE IF EXISTS `POSITION`;
CREATE TABLE `POSITION` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `POSITION_NAME` varchar(20) CHARACTER SET utf8 NOT NULL COMMENT '职位名称',
  `SUPPLIE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '供应商',
  `JOB_CATEGORY_CODE` int(11) DEFAULT NULL COMMENT '工作性质code',
  `JOB_CATEGORY_CODE_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '工作性质name',
  `JOB_EXPERIENCE_DEMAND` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '工作经验要求',
  `EDUCATION_DEMAND` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '学历要求',
  `SALARY_DEMAND` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '薪资要求',
  `LATEST_COME_TIME` datetime(6) DEFAULT NULL COMMENT '最迟到岗时间',
  `PRINCIPAL` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '负责人',
  `COOPERATOR` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '协作者',
  `STARTOR` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '启动者',
  `JOB_DESC` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'jd',
  `REMARK` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '冗余字段',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  `NUMBER` int(11) DEFAULT NULL COMMENT '招聘人数',
  `LEVEL_CODE` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
