'use strict';

const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class CandidateController extends Controller {
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }

  async processCount() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.processCount(params);
    return ReturnJson.success(countList);
  }

  async search() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.search(params);
    return ReturnJson.success(countList);
  }

  async changeProcess() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.changeProcess(params);
    return ReturnJson.success(countList);
  }

  async add() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.add(params);
    return ReturnJson.success(countList);
  }

  async addRemark() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.addRemark(params);
    return ReturnJson.success(countList);
  }

  async delete() {
    const params = this.ctx.request.body;
    const countList = this.ctx.service.candidateService.delete(params);
    return ReturnJson.success(countList);
  }
}

module.exports = CandidateController;
