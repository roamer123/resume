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

 Date: 07/09/2018 15:52:37 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `RESUME`
-- ----------------------------
DROP TABLE IF EXISTS `RESUME`;
CREATE TABLE `RESUME` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `RESUME_ID` int(11) DEFAULT NULL COMMENT '员工id',
  `ORGANIZATION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '组织CODE',
  `ORGANIZATION_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '组织名称',
  `EMPLOYEE_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '姓名',
  `ID_CARD` varchar(20) DEFAULT NULL COMMENT '证件号码',
  `SEX` varchar(10) DEFAULT NULL COMMENT '性别',
  `PHONE` varchar(20) DEFAULT NULL COMMENT '电话',
  `EMAIL` varchar(50) DEFAULT NULL COMMENT '邮件',
  `BIRTHDAY` datetime(6) DEFAULT NULL COMMENT '出生日期',
  `GRADUATION_DATE` datetime(6) DEFAULT NULL COMMENT '毕业日期',
  `EDUCATION_LEVEL_CODE` varchar(10) CHARACTER SET utf8 DEFAULT NULL COMMENT '最高学历code',
  `SCHOOL` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '学校',
  `MAJOR` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '专业',
  `TOTAL_WORKING_YEARS` varchar(20) DEFAULT NULL COMMENT '总工作年限',
  `RELA_WORKING_YEARS` varchar(20) DEFAULT NULL COMMENT '专业工作年限',
  `TECHNOLOGY_DIRECTION_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '申请职位code',
  `RANK_LEVEL_CODE` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '外包等级(初级，中级，高级)code',
  `SKILL_DESC` varchar(200) CHARACTER SET utf8 DEFAULT NULL COMMENT '技能简述',
  `REGISTER` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '户籍',
  `DOMICILE` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '目前居住地',
  `STATUS` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '状态',
  `REMARK` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `NEED_ORGANIZATION_CODE` varchar(20) DEFAULT NULL COMMENT '推荐需求方CODE',
  `HAS_CHILD` varchar(2) DEFAULT NULL COMMENT '是否有儿女，1:有 0：没有',
  `MAR_STATUS` varchar(2) DEFAULT NULL COMMENT '婚姻状况，1：已婚 0:未婚',
  `RESERVE_DATE` datetime(6) DEFAULT NULL COMMENT '预约时间',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '最新修改人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '最新修改时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
