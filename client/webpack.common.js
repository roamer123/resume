const path = require('path');

// 定义了一些文件夹的路径
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  // 项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: APP_PATH,
  // 输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'build.js',
    publicPath: '/'
  },

  resolve: {
    // 自动补全的拓展名
    extensions: ['.js', '.jsx', '.json', '.less'],
    // 路径别名
    alias: {
      'assets': path.resolve(__dirname, 'assets'),
      'templates': path.resolve(__dirname, 'src/templates'),
      'components': path.resolve(__dirname, 'components'),
      'component': path.resolve(__dirname, 'src/component'),
      'container': path.resolve(__dirname, 'src/container'),
      'reduxes': path.resolve(__dirname, 'src/reduxes'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'src': path.resolve(__dirname, 'src'),
      'doc': path.resolve(__dirname, 'doc'),
      'style': path.resolve(__dirname, 'style'),
      'api': path.resolve(__dirname, 'src/api'),
      'router': path.resolve(__dirname, 'src/router')
    }
  },
  // devserver 配置
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true
  },
  // css 处理
  module: {
    rules: [
      // exclude 排除，不需要编译的目录
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(css)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
        }]
      },
      {
        test: /\.(less)$/,
        exclude: [/components/, /style/],
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            import: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }, {
          loader: 'less-loader',
          options: {
            import: true
          }
        }]
      },
      {
        test: /\.(less)$/,
        exclude: [/src/],
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          // options: {
          //   importLoaders: 1,
          // }
        }, {
          loader: 'less-loader',
        }]
      },
      {
        test: /\.(png|svg|jpg|gif|webp|ico)$/,
        use: [
           'file-loader'
         ],
         exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000
          }
        }],
        include: path.resolve(__dirname, 'assets/fonts')
      },
      {
        test: /\.(jsx|js)$/,
        use: 'eslint-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  }

};
