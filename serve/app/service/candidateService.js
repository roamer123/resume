'use strict';
const Service = require('egg').Service;

class CandidateService extends Service {

  async count(options = {}) {
    const countList = await this.ctx.model.Candidate.countCandidate(options);
    return countList;
  }

  async search(params = {}) {
    const list = await this.ctx.model.Candidate.queryCandidate(params);
    return list;
  }

  async change(params = []) {
    // for (let i = 0; i < 1000; i++) {
    //   params.push({
    //     INTERVIEWER_PROCESS_CODE: 'PROCESS_NEW' + i,
    //     ID: i,
    //   });
    // }
    const result = await this.ctx.model.Candidate.changeList(params);
    return {
      code: result ? 'success' : 'fail',
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
