'use strict';
const Service = require('egg').Service;

class CandidateService extends Service {

  async insert(params) {
    const { ctx } = this;
    const insertResult = await ctx.model.Candidate.insertCandidate(params);
    return insertResult;
  }
}
module.exports = CandidateService;
