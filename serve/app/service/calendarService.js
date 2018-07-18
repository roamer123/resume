'use strict';
const Service = require('egg').Service;

class CalendarService extends Service {
    async initInterview(params = {}) {
        const list = await this.ctx.model.Candidate.queryInitInterview(params);
        //从字典表做映射
        for(let item in list){
            let code = list[item].NEED_ORGANIZATION_CODE;
            let params = {code:code};
            const {VALUE} = await this.ctx.model.Dictionary.find(params);
            list[item].NEED_ORGANIZATION_NAME = VALUE;
        }
        return list;
    }

    async initExam(params = {}) {
        const list = await this.ctx.model.Candidate.queryInitExam(params);
        //从字典表做映射
        for(let item in list){
            let orgCode = list[item].NEED_ORGANIZATION_CODE;
            var {VALUE} = await this.ctx.model.Dictionary.find({code:orgCode});
            list[item].NEED_ORGANIZATION_NAME = VALUE;

            let levelCode = list[item].RANK_LEVEL_CODE;
            var {VALUE} = await this.ctx.model.Dictionary.find({code:levelCode});
            list[item].RANK_LEVEL_NAME = VALUE;
        }
        return list;
    }

    async initIn(params = {}) {
        const list = await this.ctx.model.Candidate.queryIn(params);
         //从字典表做映射
         for(let item in list){
            let orgCode = list[item].NEED_ORGANIZATION_CODE;
            var {VALUE} = await this.ctx.model.Dictionary.find({code:orgCode});
            list[item].NEED_ORGANIZATION_NAME = VALUE;

            let levelCode = list[item].RANK_LEVEL_CODE;
            var {VALUE} = await this.ctx.model.Dictionary.find({code:levelCode});
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