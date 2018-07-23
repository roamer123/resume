'use strict';

const path = require('path');
const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UploadController extends Controller {
  async upload() {
    const ctx = this.ctx;
    const stream = await ctx.getFileStream();
    // console.log('stream', stream);
    const name = 'egg-multipart-test/' + path.basename(stream.filename);
    let result;
    try {
      result = await ctx.multipart(name, stream);
      console.log('result', result);
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }

    ctx.body = {
      url: result.url,
      fields: stream.fileds,
    };
  }
}

module.exports = UploadController;
