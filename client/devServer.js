const opn = require('opn');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev.js');
const routers = require('./mock/router/peoplemanage')

let server = new WebpackDevServer(webpack(config), {
  // 设置 WebpackDevServer 的开发目录, 默认为当前项目的根目录
  // contentBase: path.join(__dirname, '../dist'),
  openPage: 'http://localhost:8080/'
})

server.use(routers)

server.listen(8080, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  setTimeout(() => {
    opn('http://localhost:8080/');
  }, 1000);
});

module.exports = server;
