'use strict';

const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const ReturnJson = require('../utils/returnJson');

class UploadController extends Controller {
  async sigleUpload() {
    const { ctx } = this;
    const stream = await this.ctx.getFileStream();
    const { CANDIDATE_ID } = stream.fields;
    if (CANDIDATE_ID) {
      const fileInfo = stream.filename.split('.');
      const length = fileInfo.length;
      const filename = fileInfo[length - 2] + '-' + this.guid() + CANDIDATE_ID + '.' + fileInfo[length - 1];
      const target = path.join(this.config.baseDir, 'apps/public/upload', filename);

      // 生成写入流
      const writeStream = fs.createWriteStream(target);
      try {
        stream.pipe(writeStream);
      } catch (err) {
        await sendToWormhole(stream);
        throw err;
      }

      const isExist = await ctx.model.FileInfo.queryFileInfo({
        CANDIDATE_ID,
      });
      // 存在则更新，否则新增
      isExist ?
        await ctx.model.FileInfo.updateFileInfo({
          FILE_NAME: filename, // 文件名
          FILE_TYPE: fileInfo[length - 1], // 文件类型
          FILE_URL: target, // 文件路径
        }, {
          CANDIDATE_ID,
        })
        : await ctx.model.FileInfo.addFileInfo({
          CANDIDATE_ID, // 候选人ID
          FILE_NAME: filename, // 文件名
          FILE_TYPE: fileInfo[length - 1], // 文件类型
          FILE_URL: target, // 文件路径
        });

      ctx.body = ReturnJson.success({
        filename,
      });

    }
  }

  async multUpload() {
    const { ctx } = this;
    const parts = this.ctx.multipart({ autoFields: true });
    const files = [];
    let stream;
    while ((stream = await parts()) != null) {
      const fileInfo = stream.filename.split('.');
      const length = fileInfo.length;
      const filename = fileInfo[length - 2] + '-' + this.guid() + '.' + fileInfo[length - 1];
      const target = path.join(this.config.baseDir, 'app/public/upload', filename);

      // 生成写入流
      const writeStream = fs.createWriteStream(target);
      try {
        stream.pipe(writeStream);
      } catch (err) {
        await sendToWormhole(stream);
        throw err;
      }

      await ctx.model.FileInfo.addFileInfo({
        FILE_NAME: filename, // 文件名
        FILE_TYPE: fileInfo[length - 1], // 文件类型
        FILE_URL: target, // 文件路径
      });
      files.push(filename);

    }

    ctx.body = ReturnJson.success({
      fields: parts.fields,
      files,
    });
  }

  async download() {
    const { ctx } = this;
    const { CANDIDATE_ID } = ctx.request.body;
    if (CANDIDATE_ID) {
      const fileInfo = await ctx.model.FileInfo.queryFileInfo({
        CANDIDATE_ID,
      });
      const filePath = path.resolve(fileInfo.FILE_URL);
      this.ctx.attachment(fileInfo.FILE_NAME);
      this.ctx.set('Content-Type', 'application/octet-stream');
      this.ctx.body = fs.createReadStream(filePath);
    } else {
      ctx.body = ReturnJson.success({
        errorMesg: '字段缺失',
      });
    }
  }

  // 用于生成uuid
  S4() {
    return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
  }

  guid() {
    return (this.S4() + this.S4() + '-' + this.S4());
  }
}

module.exports = UploadController;
