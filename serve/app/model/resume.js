'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Resume = app.model.define('RESUME', {
    ID: INTEGER,
    RESUME_ID: INTEGER, // 员工id
    ORGANIZATION_CODE: STRING, // 组织CODE
    ORGANIZATION_NAME: STRING, // 组织名称
    EMPLOYEE_NAME: STRING, // 姓名
    ID_CARD: STRING, // 证件号码
    SEX: STRING, // 性别
    PHONE: STRING, // 电话
    EMAIL: STRING, // 邮件
    BIRTHDAY: DATE, // 出生日期
    GRADUATION_DATE: DATE, // 毕业日期
    EDUCATION_LEVEL_CODE: STRING, // 最高学历code
    SCHOOL: STRING, // 学校
    MAJOR: STRING, // 专业
    TOTAL_WORKING_YEARS: STRING, // 总工作年限
    RELA_WORKING_YEARS: STRING, // 专业工作年限
    TECHNOLOGY_DIRECTION_CODE: STRING, // 申请职位code
    RANK_LEVEL_CODE: STRING, // 外包等级(初级，中级，高级)code
    SKILL_DESC: STRING, // 技能简述
    REGISTER: STRING, // 户籍
    DOMICILE: STRING, // 目前居住地
    STATUS: STRING, // 状态
    REMARK: STRING, // 备注
    NEED_ORGANIZATION_CODE: STRING, // 推荐需求方CODE
    HAS_CHILD: STRING, // 是否有儿女，1:有 0：没有
    MAR_STATUS: STRING, // 婚姻状况，1：已婚 0:未婚
    RESERVE_DATE: DATE, // 预约时间
    CREATED_BY: STRING,
    UPDATED_BY: STRING,
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true, // 表示模型对应当表名与模型名称相同
  });

  Resume.queryResume = async function(params) {
    return await this.findOne({
      where: params,
    //   attributes: [ 'ID', 'OPERATION_CODE', 'OPERATION__NAME' ],
    });
  };

  Resume.insertResume = async function(params) {
    return await this.create(params);
  };

  Resume.updateResume = async function(params, options) {
    return await this.update(params, options);
  };

  Resume.deleteResume = async function(options) {
    return await this.destroy({
      where: options,
    });
  };


  return Resume;
};
