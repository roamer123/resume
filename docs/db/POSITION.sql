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

 Date: 08/20/2018 15:47:34 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `POSITION`
-- ----------------------------
DROP TABLE IF EXISTS `POSITION`;
CREATE TABLE `POSITION` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `TECHNOLOGY_DIRECTION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '职位名称code',
  `NEED_ORGANIZATION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '需求方code',
  `JOB_CATEGORY_CODE` varchar(20) DEFAULT NULL COMMENT '工作性质code',
  `JOB_CATEGORY_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '工作性质name',
  `JOB_EXPERIENCE_DEMAND_CODE` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '工作经验要求',
  `EDUCATION_LEVEL_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '学历要求',
  `SALARY_DEMAND` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '薪资要求',
  `LATEST_COME_TIME` datetime(6) DEFAULT NULL COMMENT '最迟到岗时间',
  `PRINCIPAL` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '负责人',
  `COOPERATOR` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '协作者',
  `STARTOR` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '启动者',
  `JOB_DESC` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT 'jd',
  `REMARK` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '冗余字段',
  `NUMBER` int(11) DEFAULT NULL COMMENT '招聘人数',
  `RANK_LEVEL_CODE` varchar(20) DEFAULT NULL COMMENT '招聘职级code',
  `POSITION_PROCESS_CODE` varchar(20) DEFAULT NULL COMMENT '招聘状态code:PRERECRUITING:待招聘，RECRUITING:招聘中，STOPRECRUIT:招聘结束',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
