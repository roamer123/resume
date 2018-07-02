/*
* @Author: lulu27753
* @Date:   2018-04-19 16:32:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-05-10 17:48:14
*/
import { getMenuData } from 'container/dashboard/getMenuData';
import React from 'react';
import Dashboard from 'container/dashboard';

function getFlatMenuData(menus) {
	let keys = {};
	menus.forEach((item) => {
		if (item.children) {
			keys[item.path] = { ...item };
			keys = { ...keys, ...getFlatMenuData(item.children) };
		} else {
			keys[item.path] = { ...item };
		}
	});
	return keys;
}
export const getRouterData = () => {
	const routerConfig = {
		'/': { component: {Dashboard} },
		'/dashboard': { component: {Dashboard} },
		'/user': { component: () => <h1>business-tree</h1> },
		'/business': { component: () => <h1>user-list</h1> },
		'/report': { component: () => <h1>scenario-chart</h1> },
		'/infosafe': { component: () => <h1>notfound</h1> },
		'/achievement': { component: () => <h1>achievement</h1> },
	};

	// 从getMenuData获取name的值 或者 直接在路由数据中设置它的值
	const menuData = getFlatMenuData(getMenuData());
	const routerData = {};
	Object.keys(routerConfig).forEach((item) => {
		const menuItem = menuData[item.replace(/^\//, '')] || {};
		routerData[item] = {
			...routerConfig[item],
			name: routerConfig[item].name || menuItem.name,
			authority: routerConfig[item].authority || menuItem.authority,
		}
	})
	// // console.log('routerData', routerData);
	return routerData;
}
