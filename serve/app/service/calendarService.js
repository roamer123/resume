'use strict';
const Service = require('egg').Service;

class CalendarService extends Service {
  async initInterview(params = {}) {
    const list = await this.ctx.model.Candidate.queryInitInterview(params);
    // 从字典表做映射
    for (const item in list) {
      const code = list[item].NEED_ORGANIZATION_CODE;
      const params = { code };
      const { VALUE } = await this.ctx.model.Dictionary.find(params);
      list[item].NEED_ORGANIZATION_NAME = VALUE;
    }
    return list;
  }

  async initExam(params = {}) {
    const list = await this.ctx.model.Candidate.queryInitExam(params);
    // 从字典表做映射
    for (const item in list) {
      let VALUE;
      const orgCode = list[item].NEED_ORGANIZATION_CODE;
      ({ VALUE } = await this.ctx.model.Dictionary.find({ code: orgCode }));
      list[item].NEED_ORGANIZATION_NAME = VALUE;

      const levelCode = list[item].RANK_LEVEL_CODE;
      ({ VALUE } = await this.ctx.model.Dictionary.find({ code: levelCode }));
      list[item].RANK_LEVEL_NAME = VALUE;
    }
    return list;
  }

  async initIn(params = {}) {
    const list = await this.ctx.model.Candidate.queryIn(params);
    // 从字典表做映射
    for (const item in list) {
      let VALUE;
      const orgCode = list[item].NEED_ORGANIZATION_CODE;
      ({ VALUE } = await this.ctx.model.Dictionary.find({ code: orgCode }));
      list[item].NEED_ORGANIZATION_NAME = VALUE;

      const levelCode = list[item].RANK_LEVEL_CODE;
      ({ VALUE } = await this.ctx.model.Dictionary.find({ code: levelCode }));
      list[item].RANK_LEVEL_NAME = VALUE;
    }
    return list;
  }

  async add(params = {}) {
    const list = await this.ctx.model.Candidate.insertCandidate(params);
    return list;
  }

  async delete(params = {}) {
    const list = await this.ctx.model.Candidate.deleteCandidate(params);
    return list;
  }
}

module.exports = CalendarService;
