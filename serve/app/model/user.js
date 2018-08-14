'use strict';

// const bcrypt = require('bcryptjs');

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;

  const User = app.model.define('USER', {
    ID: { type: INTEGER, unique: true },
    USER_NAME: { type: STRING(20), unique: true },
    PASSWORD: STRING,
    ROLE_TYPE: STRING, // 用户角色code
    ORGAZATION_TYPE: STRING, // 组织类型供应商，需求方
    ORGAZATION_CODE: STRING, // 组织类型code
    EMAIL: STRING,
    PHONE: STRING,
    ACCESS_TOKEN: STRING, // token
    EXPIRES: DATE, // 过期时间
  }, {
    createdAt: 'DATE_CREATED',
    updatedAt: 'DATE_UPDATED',
    freezeTableName: true,
  });

  // static methods
  User.register = async function(fields) {
    // fields.PASSWORD = hashPassword(fields.password);
    fields.PASSWORD = fields.password;
    delete fields.password;
    return await this.create(fields);
  };

  User.getUser = async function(USER_NAME, PASSWORD) {
    return await this.authenticate(USER_NAME, PASSWORD);
  };

  User.authenticate = async function(USER_NAME, PASSWORD) {
    const user = await this.findOne({
      where: { USER_NAME },
      attributes: [ 'ID', 'USER_NAME', 'PASSWORD', 'ORGANIZATION_CODE', 'ROLE_TYPE' ],
    });
    if (!user) return null;
    return PASSWORD === user.dataValues.PASSWORD ? (delete user.dataValues.PASSWORD && user.dataValues) : null;
    // return bcrypt.compareSync(PASSWORD, user.dataValues.PASSWORD) ? (delete user.dataValues.PASSWORD && user.dataValues) : null;
  };

  User.queryUser = async function(params) {
    return await this.findOne({
      where: params,
      attributes: [ 'ID', 'USER_NAME', 'ROLE_TYPE', 'ORGANIZATION_TYPE', 'ORGANIZATION_CODE', 'EMAIL', 'PHONE', 'ACCESS_TOKEN', 'EXPIRES' ],
    });
  };

  User.updateUser = async function(params, options) {
    console.log('params', params);
    return await this.update(params, {
      where: options,
    });
  };

  User.destroy = async function(options) {
    return await this.destroy(options);
  };

  // instance methods
  // User.prototype.logSignin = async function() {
  //   await this.update({ lastSignInAt: new Date() });
  // };

  return User;
};

// function hashPassword(password) {
//   const salt = bcrypt.genSaltSync(10);
//   return bcrypt.hashSync(password, salt);
// }
