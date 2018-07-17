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

 Date: 07/05/2018 20:37:22 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `LOG`
-- ----------------------------
DROP TABLE IF EXISTS `LOG`;
CREATE TABLE `LOG` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `OPERATION_CODE` varchar(20) DEFAULT NULL COMMENT '操作者CODE',
  `OPERATION_NAME` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '操作者名称',
  `OPERATION_TYPE` varchar(20) DEFAULT NULL COMMENT '操作类别',
  `OPERATION_DATE` datetime(6) DEFAULT NULL COMMENT '操作时间',
  `OPERATION_LOG` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '操作日志',
  `REMARK1` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注',
  `REMARK2` varchar(100) CHARACTER SET utf8 DEFAULT NULL COMMENT '备注2',
  `CREATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATED_BY` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '最新修改人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '最新修改时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

SET FOREIGN_KEY_CHECKS = 1;
