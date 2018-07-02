// 筛选路由信息，筛选的算法为只保留当前 match.path 下最邻近的路由层级（更深入的层级留到嵌套路由中自行渲染），
// 举个例子(每条为一个 route path) ：
// 当前 match.path 为 /
// /a                 // 没有更近的层级，保留
// / a / b               // 存在更近层级 /a，去掉
// / c / d               // 没有更近的层级，保留
// / c / e               // 没有更近的层级，保留
// / c / e / f             // 存在更近层级 /c/e，去掉

function getRelation(str1, str2) {
  // // console.log('str1', str1);
  // // console.log('str2', str2);
  if (str1 === str2) {
    console.warn('两个路径相等！');
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  // 两个路由没有父子关系
  return 3;
}

// @param1: 当前路由的 match 路径
// @param2: 路由信息 routerData

export function getRoutes(path, routerData) {
  // 筛选出子路由
  let routes = Object.keys(routerData).filter((routePath) => (
      routePath.indexOf(path) === 0 && routePath !== path
    ));
  routes = routes.map(item => {
    // // console.log('item', item);
    return item.replace(path, '')
  });
  // // console.log('routes', routes);

  let renderArr = [];
  renderArr.push(routes[0]);

  for (let i = 1; i < routes.length; i++) {
    let isAdd = false;
    isAdd = renderArr.every(item => {
          // // console.log('renderArr_item', item);
          // // console.log('routes[i]', routes[i]);
          return getRelation(item, routes[i]) === 3
        }
      );
    // // console.log('isAdd', isAdd);
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);

    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  // 自动分析路由 exact 参数，除了还有嵌套路由的路径，其余路径默认设为 exact。
  const renderRoutes = renderArr.map((item) => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    // // console.log('renderRoutes_item', path);
    // // console.log('renderRoutes_item', item);
    return {
      ...routerData[`${path}${item}`], // item.component
      key: `${path}${item}`,
      path: `${path}${item}`,
      exact,
    }
  })

  return renderRoutes;
}
