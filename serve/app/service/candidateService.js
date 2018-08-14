'use strict';
const Service = require('egg').Service;

class CandidateService extends Service {

  async count(options = {}) {
    return await this.ctx.model.Candidate.countCandidate(options);
  }

  async search(params = {}) {
    const list = await this.ctx.model.Candidate.queryCandidate(params);
    const mapList = [];
    await this.ctx.model.transaction(async t => {
      await list.reduce(async (promise, item) => {
        item.dataValues.WORKING_YEARS_NAME = (await this.ctx.model.Dictionary.queryCodeToValue(item.WORKING_YEARS_CODE, {
          transaction: t,
        }))[0].VALUE;
        item.dataValues.EDUCATION_LEVEL_NAME = (await this.ctx.model.Dictionary.queryCodeToValue(item.EDUCATION_LEVEL_CODE, {
          transaction: t,
        }))[0].VALUE;
        item.dataValues.RANK_LEVEL_NAME = (await this.ctx.model.Dictionary.queryCodeToValue(item.RANK_LEVEL_CODE, {
          transaction: t,
        }))[0].VALUE;
        item.dataValues.TECHNOLOGY_DIRECTION_NAME = (await this.ctx.model.Dictionary.queryCodeToValue(item.TECHNOLOGY_DIRECTION_CODE, {
          transaction: t,
        }))[0].VALUE;
        mapList.push(item.dataValues);
        return Promise.resolve();
      }, Promise.resolve()).then(() => {
        return mapList;
      }).catch(err => {
        console.log(err);
        return [];
      });
    });
    return mapList;
  }

  async change(params) {
    const result = await this.ctx.model.Candidate.changeList(params);
    return {
      code: result ? 'success' : 'fail',
      INTERVIEWER_PROCESS_CODE: params.INTERVIEWER_PROCESS_CODE,
    };
  }

  async add(params) {
    return await this.ctx.model.Candidate.add(params);
  }

  async update(attributes = {}, options = {}) {
    return await this.ctx.model.Candidate.update(attributes, options);
  }

  async delete(options = {}) {
    return await this.ctx.model.Candidate.destory(options);
  }
}
module.exports = CandidateService;
