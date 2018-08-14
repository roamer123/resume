'use strict';
const Service = require('egg').Service;

class InterviewService extends Service {
  async queryAll(params = {}) {
    return await this.ctx.model.Interview.queryAll(params);
  }

  async add(params) {
    return await this.ctx.model.Interview.add(params);
  }

  async update(attributes = {}, options = {}) {
    return await this.ctx.model.Interview.change(attributes, options);
  }

  async delete(options = {}) {
    return await this.ctx.model.Interview.delete(options);
  }
}

module.exports = InterviewService;
