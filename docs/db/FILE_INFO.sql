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

 Date: 07/23/2018 21:07:20 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `FILE_INFO`
-- ----------------------------
DROP TABLE IF EXISTS `FILE_INFO`;
CREATE TABLE `FILE_INFO` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT '文件id 主键',
  `CANDIDATE_ID` varchar(20) DEFAULT NULL COMMENT '员工id',
  `FILE_NAME` varchar(50) CHARACTER SET utf8 DEFAULT NULL COMMENT '文件名',
  `FILE_URL` varchar(255) CHARACTER SET utf8 DEFAULT NULL COMMENT '文件URL',
  `FILE_TYPE` varchar(20) DEFAULT NULL COMMENT '文件类型',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '最新修改人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '最新修改时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
