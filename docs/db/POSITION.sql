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

 Date: 07/09/2018 16:24:13 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `POSITION`
-- ----------------------------
DROP TABLE IF EXISTS `POSITION`;
CREATE TABLE `POSITION` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `TECHNOLOGY_DIRECTION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '职位名称code',
  `NEED_ORGANIZATION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '需求方code',
  `JOB_CATEGORY_CODE` varchar(20) DEFAULT NULL COMMENT '工作性质code',
  `JOB_CATEGORY_CODE_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '工作性质name',
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
  `POSITION_PROCESS_CODE` varchar(20) DEFAULT NULL COMMENT '招聘状态code:0:招聘中，1：招聘结束',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '更新人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `POSITION`
-- ----------------------------
BEGIN;
INSERT INTO `POSITION` VALUES ('1', 'WEBFRONT', 'NEED_ZGPA', 'JOB_TRAIN', '', 'BETWEEN_1_3', 'BACHELOR', '15000', '2018-10-20 00:00:00.000000', '张三', null, null, '负责前端开发', null, '2', 'LEVEL_MIDDLE', '0', null, null, null, null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
