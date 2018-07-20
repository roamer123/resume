'use strict';
const Service = require('egg').Service;

class CandidateService extends Service {

  async count(options = {}) {
    const countList = await this.ctx.model.Candidate.countCandidate(options);
    return countList;
  }

  async search(params = {}) {
    const list = await this.ctx.model.Candidate.queryCandidate(params);
    // const newList = list.reduce(async (promise, item) => {
    //   // console.log('item', item);
    //   item.dataValues.WORKING_YEARS = await this.ctx.model.Dictionary.queryCodeToValue(item.WORKING_YEARS_CODE)[0].VALUE;
    //   item.dataValues.EDUCATION_LEVEL = await this.ctx.model.Dictionary.queryCodeToValue(item.EDUCATION_LEVEL_CODE)[0].VALUE;
    //   item.dataValues.RANK_LEVEL = await this.ctx.model.Dictionary.queryCodeToValue(item.RANK_LEVEL_CODE)[0].VALUE;
    //   item.dataValues.TECHNOLOGY_DIRECTION = await this.ctx.model.Dictionary.queryCodeToValue(item.TECHNOLOGY_DIRECTION_CODE)[0].VALUE;
    //   return Promise.resolve();
    // }, Promise.resolve());
    // console.log('--------- newlist --------');
    // console.log(newList);
    // console.log('----------- end-----------');
    return list;
  }

  async change(params) {
    const result = await this.ctx.model.Candidate.changeList(params);
    return {
      code: result ? 'success' : 'fail',
      INTERVIEWER_PROCESS_CODE: params.INTERVIEWER_PROCESS_CODE,
    };
  }

  async add(params) {
    const result = await this.ctx.model.Candidate.add(params);
    console.log('result', result);
    return result;
  }

  async update(attributes = {}, options = {}) {
    const result = await this.ctx.model.Candidate.update(attributes, options);
    return result;
  }

  async delete(options = {}) {
    const result = await this.ctx.model.Candidate.destory(options);
    return result;
  }

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Candidate.insertCandidate(params);
    return insertResult;
  }
}
module.exports = CandidateService;
