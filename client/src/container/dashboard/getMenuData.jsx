const menuData = [{
  name: '首页',
  icon: 'appstore-o',
  path: 'dashboard',
  children: [{
    name: '人员信息',
    path: 'user-group',
  }],
  }, {
  name: 'NotFound',
  icon: 'warning-circle',
  path: 'notfound',
}
];
function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);




