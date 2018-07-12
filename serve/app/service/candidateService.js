'use strict';

const Service = require('egg').Service;

class CandidateService extends Service {

  async processCount(params) {
    const countList = this.ctx.model.candidate.query(params);
    return countList;
  }

  async search() {
  }

  async changeProcess() {
  }

  async add() {
  }

  async addRemark() {
  }

  async delete() {
  }
}

module.exports = CandidateService;
