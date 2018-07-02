var fs = require('fs');
var path = require('path');
var _ = require('lodash');

function recursiveFiles(dir, options) {
    var _r = [];

    if (options && options.ext && options.ext[0] !== '.') options.ext = '.' + options.ext;

    var files = fs.readdirSync(dir);

    files.forEach((file)=> {
        file = path.join(dir, file);
        var stats = fs.statSync(file);
        if (stats.isDirectory()) {
            _r = _r.concat(recursiveFiles(file, options))
        } else {
            const ext = path.extname(file);//文件扩展名
            const hidden = path.basename(file)[0] === '.';
            const nonregular = !stats.isFile();

            if (
                (options.hidden || !hidden) &&
                (!options.ext || options.ext === ext) &&
                (options.nonregular || !nonregular)
            ) {
                _r.push(file);
            }
        }
    });
    return _r;
}



function buildRoutes(files) {
    var routes = [];
    files.forEach(function (file) {
        file = file.replace(/[\\]+/g, '/');
        let rule = file.match(/^.+views\/(.*)\.vue$/)[1],
            _rule = rule.replace(/\/?index$/, '').split('/');
        recursiveRoute(routes, rule, _rule, _rule[0], 1);
    });
    return routes;
}

//递归生成路由表
function recursiveRoute(route, file, _path, root, level) {
    var _f;
    if (level == 3) {
        _f = _path.join('/');
    } else {
        _f = _path.shift();
    }
    var node = {path: (level == 1 ? '/' : '') + _f};

    if (!_.find(route, node)) {
        route.push(node)
    } else {
        node = _.find(route, node);
    }
    if (level != 3 && _path.length > 0) {
        if (!node['children']) {
            node['children'] = [];
        }
        level++;
        recursiveRoute(node['children'], file, _path, root, level);
    } else {
        if (root) {
            node['component'] = "ASYNCLOAD:" + file + ":" + root;
        } else {
            node['component'] = "SYNCLOAD:" + file;
        }
    }
}


exports.createRoutes = function (dir) {
    // console.log("开始生成路由表信息");
    var files = recursiveFiles(dir, {ext: 'vue'});
    var routes = buildRoutes(files);
    var str = JSON.stringify(routes, null, 4);
    //生成加载函数
    str = str.replace(/"ASYNCLOAD:([\S\\]+):(\S+)"/g, "r => require.ensure([], () => r(require('./$1.vue')), '$2')");
    str = str.replace(/"SYNCLOAD:([\S\\]+)"/g, "require('./$1.vue')");

    fs.writeFile(path.join(dir, './route.js'), "export default " + str);
    // console.log("路由表信息已经生成完毕");
}

