'use strict';

const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class UploadController extends Controller {
  async upload() {
    const { ctx } = this;
    const parts = this.ctx.multipart({ autoFields: true });
    const files = [];
    let stream;
    while ((stream = await parts()) != null) {
      const filename = stream.filename;
      const target = path.join(this.config.baseDir, 'app/egg-multipart-test', filename);
      // fs.writeFileSync(target);
      // 生成写入流
      const writeStream = fs.createWriteStream(target);
      try {
        stream.pipe(writeStream);
      } catch (err) {
        await sendToWormhole(stream);
        throw err;
      }
      const fileInfo = filename.split('.');
      await ctx.model.FileInfo.addFileInfo({
        // CANDIDATE_ID: , // 候选人ID
        FILE_NAME: filename, // 文件名
        FILE_TYPE: fileInfo[fileInfo.length - 1], // 文件类型
        FILE_URL: target, // 文件路径
      });
      files.push(filename);

    }

    ctx.body = ReturnJson.success({
      // url: result.url,
      fields: parts.fields,
      files,
    });
  }
}

module.exports = UploadController;
