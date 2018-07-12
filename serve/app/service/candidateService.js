'use strict';

const Service = require('egg').Service;

class CandidateService extends Service {

  async count(params = {}) {
    const options = Object.keys(params).length === 0 ? {
      group: 'INTERVIEWER_PROCESS_CODE',
      attributes: [ 'INTERVIEWER_PROCESS_CODE' ],
    } : {
      group: 'INTERVIEWER_PROCESS_CODE',
      attributes: [ 'INTERVIEWER_PROCESS_CODE' ],
      where: {
        params,
      },
    };
    // const countList = await this.ctx.model.query('select INTERVIEWER_PROCESS_CODE, sum(ID) as sum from CANDIDATE group by INTERVIEWER_PROCESS_CODE');
    const countList = await this.ctx.model.Candidate.countCandidate(options);
    return countList;
  }

  async search(params = {}) {
    const list = await this.ctx.model.Candidate.queryCandidate(params);
    return list;
  }

  async change(params = {}) {
    let result;
    const promise = new Promise(() => {
      // const _self = this;
      if (params.length > 0) {
        for (const param of params) {
          console.log(param);
          // await _self.ctx.model.Candidate.update();
        }
      }
    });

    promise.then(function() {});

    return {
      code: result ? 'success' : 'fail',
    };
  }

  async add(params) {
    const result = await this.ctx.model.Candidate.add(params);
    console.log('result', result);
    return {
      code: result ? 'success' : 'fail',
    };
  }

  async addRemark(params = {}) {
    const result = await this.ctx.model.Candidate.update({
      REMARK: params.REMARK,
    }, {
      where: {
        ID: params.ID,
      },
    });
    return {
      code: result ? 'success' : 'fail',
    };
  }

  async delete(params = {}) {
    const result = params.ID && await this.ctx.model.Candidate.destory({
      where: {
        ID: params.ID,
      },
    });
    console.log('result', result);
    return {
      code: result ? 'success' : 'fail',
    };
  }
}

module.exports = CandidateService;
