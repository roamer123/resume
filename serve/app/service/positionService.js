'use strict';
const Service = require('egg').Service;

class PositionService extends Service {
  async query(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Position.queryPosition(params);
    // 从字典表做映射
    for (const item in queryResult) {
      let VALUE;
      const orgCode = queryResult[item].dataValues.JOB_EXPERIENCE_DEMAND_CODE;
      ({ VALUE } = orgCode ? await this.ctx.model.Dictionary.find({ code: orgCode }) : { VALUE: null });
      queryResult[item].dataValues.JOB_EXPERIENCE_DEMAND_CODE_NAME = VALUE;

      const levelCode = queryResult[item].dataValues.EDUCATION_LEVEL_CODE;
      ({ VALUE } = levelCode ? await this.ctx.model.Dictionary.find({ code: levelCode }) : { VALUE: null });
      queryResult[item].dataValues.EDUCATION_LEVEL_CODE_NAME = VALUE;

      const rankLevelCode = queryResult[item].dataValues.RANK_LEVEL_CODE;
      ({ VALUE } = rankLevelCode ? await this.ctx.model.Dictionary.find({ code: rankLevelCode }) : { VALUE: null });
      queryResult[item].dataValues.RANK_LEVEL_CODE_NAME = VALUE;
    }
    return queryResult;
  }

  async queryPositionList(params) {
    const { ctx } = this;
    const queryResult = await ctx.model.Position.queryPositionList(params);
    // 从字典表做映射
    for (const item in queryResult) {
      let VALUE;
      const orgCode = queryResult[item].dataValues.JOB_EXPERIENCE_DEMAND_CODE;
      ({ VALUE } = orgCode ? await this.ctx.model.Dictionary.find({ code: orgCode }) : { VALUE: null });
      queryResult[item].dataValues.JOB_EXPERIENCE_DEMAND_CODE_NAME = VALUE;

      const levelCode = queryResult[item].dataValues.EDUCATION_LEVEL_CODE;
      ({ VALUE } = levelCode ? await this.ctx.model.Dictionary.find({ code: levelCode }) : { VALUE: null });
      queryResult[item].dataValues.EDUCATION_LEVEL_CODE_NAME = VALUE;

      const rankLevelCode = queryResult[item].dataValues.RANK_LEVEL_CODE;
      ({ VALUE } = rankLevelCode ? await this.ctx.model.Dictionary.find({ code: rankLevelCode }) : { VALUE: null });
      queryResult[item].dataValues.RANK_LEVEL_CODE_NAME = VALUE;
    }
    return queryResult;
  }

  async count(options = {}) {
    const countList = await this.ctx.model.Position.countPosition(options);
    return countList;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Position.insertPosition(params);
    return insertResult;
  }

  async update(params) {
    const { ctx } = this;
    // 需要在此处加where
    const options = {
      where: {
        ID: params.ID,
      },
    };
    const updateResult = await ctx.model.Position.updatePosition(params, options);
    return updateResult;
  }

  async delete(params) {
    const { ctx } = this;
    const deleteResult = await ctx.model.Position.deletePosition(params);
    return deleteResult;
  }
}
module.exports = PositionService;
