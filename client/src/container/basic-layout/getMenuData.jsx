const menuData = [{
  name: '我的工作台',
  icon: 'home',
  path: 'dashboard',
  // children: [{
  //   name: '人员信息',
  //   path: 'user-group',
  // }],
  }, {
  name: '招聘职位',
  icon: 'contacts',
  path: 'recruit-title',
  }, {
  name: '候选人信息',
  icon: 'user-group',
  path: 'candidate',
  }, {
  name: '日程安排',
  icon: 'pro-table',
  path: 'calendar',
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




