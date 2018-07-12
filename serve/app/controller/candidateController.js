'use strict';
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class CandidateController extends Controller {
  async count() {
    const { ctx } = this;
    const params = ctx.request.body;
    const DropdownList = await ctx.service.candidateService.count(params);
    ctx.body = ReturnJson.success(DropdownList);
  }

  async search() {
    const { ctx } = this;
    const params = ctx.request.body;
    const list = await ctx.service.candidateService.search(params);
    ctx.body = ReturnJson.success(list);
  }

  async change() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.candidateService.change(params);
    ctx.body = ReturnJson.success(result);
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    console.log('params', params);
    const result = await ctx.service.candidateService.add(params);
    ctx.body = ReturnJson.success(result);
  }

  async addRemark() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.candidateService.addRemark(params);
    ctx.body = ReturnJson.success(result);
  }

  async delete() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.candidateService.delete(params);
    ctx.body = ReturnJson.success(result);
  }
}

module.exports = CandidateController;
