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

 Date: 07/09/2018 15:57:40 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `USER`
-- ----------------------------
DROP TABLE IF EXISTS `USER`;
CREATE TABLE `USER` (
  `ID` int(11) NOT NULL COMMENT '主键',
  `USER_NAME` varchar(20) NOT NULL COMMENT '用户名称',
  `PASSWORD` varchar(50) NOT NULL COMMENT '密码',
  `ROLE_TYPE` varchar(20) NOT NULL COMMENT '用户类型',
  `ORGANIZATION_TYPE` varchar(50) DEFAULT NULL COMMENT '用户组织类型供应商，需求方',
  `ORGANIZATION_CODE` varchar(50) DEFAULT NULL COMMENT '用户组织code',
  `EMAIL` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `PHONE` varchar(20) DEFAULT NULL COMMENT '手机',
  `ACCESS_TOKEN` varchar(100) DEFAULT NULL COMMENT 'oAuth-accessToken',
  `EXPIRES` datetime(6) DEFAULT NULL COMMENT '过期时间',
  `CREATED_BY` varchar(20) DEFAULT NULL COMMENT '创建人',
  `DATE_CREATED` datetime(6) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_BY` varchar(20) DEFAULT NULL COMMENT '更新人',
  `DATE_UPDATED` datetime(6) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `USER`
-- ----------------------------
BEGIN;
INSERT INTO `USER` VALUES ('1', 'lulu', 'aaaaa888', '1', '0', '文思海辉', 'lulu@163.com', '13874982777', null, null, null, null, null, null), ('2', 'wjq', 'aaaaa888', '0', null, null, null, null, null, null, null, null, null, null), ('3', 'test', 'aaaaa888', '1', '0', '文思海辉', null, null, '83ea7bb2042f65dd28386eb912a45184893eac7c', '2018-07-08 15:52:33.000000', null, null, null, null), ('4', 'ln', 'aaaaa888', '1', '0', '文思海辉', 'ln@163.com', '13874982777', null, null, null, null, null, null), ('5', 'test1', 'aaaaa888', '0', null, null, null, null, null, null, null, null, null, null), ('6', 'test2', 'aaaaa888', '1', '0', '文思海辉', null, null, null, null, null, null, null, null);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
