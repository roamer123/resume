import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Menu from 'components/menu';
import Icon from 'components/icon';

import styles from './index.less';
// import data from '../../data';

const { SubMenu } = Menu;


export default class SiderMenu extends PureComponent {
	constructor(props) {
		super(props);
		this.menus = props.menuData;
		this.state = {
			openKeys: this.getDefaultCollapsedSubMenus(props),
		};
	}
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        openKeys: this.getDefaultCollapsedSubMenus(nextProps),
      });
    }
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };
	// 获取当前访问的菜单的全部父级菜单
	getDefaultCollapsedSubMenus(props) {
		const { location: { pathname } } = props || this.props;
		// console.log('getDefaultCollapsedSubMenus', this.props);
		// 去首尾
		const snippets = pathname.split('/').slice(1, -1);
		const currentPathSnippets = snippets.map((item, index) => {
			const arr = snippets.filter((_, i) => (i <= index))
			return arr.join('/');
		})
		let currentMenuSelectedKeys = [];
		currentPathSnippets.forEach((item) => {
			currentMenuSelectedKeys = currentMenuSelectedKeys.concat(this.getSelectedMenuKeys(item));
		});
		// 如果没有选中菜单，则返回dashboard
		if (currentMenuSelectedKeys.length === 0) {
			return ['dashboard'];
		}
		// console.log('currentMenuSelectedKey', currentMenuSelectedKeys);
		return currentMenuSelectedKeys;
	}
  getFlatMenuKeys(menus) {
    let keys = [];
    menus.forEach((item) => {
      if (item.children) {
        keys.push(item.path);
        keys = keys.concat(this.getFlatMenuKeys(item.children));
      } else {
        keys.push(item.path);
      }
    });
    // console.log('getFlatMenuKeys', keys);

    return keys;
  }
	getSelectedMenuKeys = (path) => {
		if (!path) {
			return ['dashboard']
		}
		const flatMenuKeys = this.getFlatMenuKeys(this.menus);
		// console.log('flatMenuKeys', flatMenuKeys);
		// // console.log('path', path);
		// 去除路径开头的“/”
		if (flatMenuKeys.indexOf(path.replace(/^\//, '')) > -1) {
			return [path.replace(/^\//, '')];
		}
		// 去除路径开头结尾的“/”
		if (flatMenuKeys.indexOf(path.replace(/^\//, '').replace(/\/$/, '')) > -1) {
			return [path.replace(/^\//)];
		}
		return flatMenuKeys.filter((item) => {
			const itemRegExpStr = `^${item.replace(/:[\w-]+/g)}$`;
			const itemRegExp = new RegExp(itemRegExpStr);
			return itemRegExp.test(path.replace(/^\//, '').replace(/\/$/, ''))
		})
	}
	// 获取同级别的菜单
	// @param SiderMenu
	getNavMenuItems = (menusData) => {
		if (!menusData) {
			return [];
		}
		const NavMenuItems = menusData
			.filter(item => item.name && !item.hideInMenu)
			.map((item) => {
				const ItemDom = this.getSubMenuOrItem(item);

				return this.checkPermissionItem(item.authority, ItemDom);
			})
			.filter(item => !!item);
			// console.log('NavMenuItems', NavMenuItems);
		return NavMenuItems;
	}
	// 如果是一级菜单则返回Menu.Item，如果是多级菜单，则通过递归返回SubMenu及Menu.Item
	// 最后一级菜单通过path的类型判断返回<a>或者<Link>
	getSubMenuOrItem = (item) => {
		// // console.log('getSubMenuOrItem_item', item);
		if (item.children && item.children.some(child => child.name)) {
		return (
  <SubMenu
    key={item.key || item.path}
    title={item.icon ? (<span>{getIcon(item.icon)}<span>{item.name}</span></span>) : item.name}
	>
    {this.getNavMenuItems(item.children)}
  </SubMenu>
		  );
				} else {
					return (
  <Menu.Item
    key={item.key || item.path}
    className={styles.menu_selected}
  >
    {this.getMenuItemPath(item)}
  </Menu.Item>
						)
				}
			}
  // 转化路径
  conversionPath=(path) => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  }
	// 判断是否是http链接，
	// http:返回a,直接链接跳转
	// key:返回Link,通过路由进行跳转
	// @param Menu.Item
	getMenuItemPath = (item) => {
		const itemPath = this.conversionPath(item.path);
		const icon = getIcon(item.icon);
		const { target, name } = item;
		// 判断是否是http链接
		if (/^https?:\/\//.test(itemPath)) {
			return (
  <a href={itemPath} target={target}>
    {icon}<span>{name}</span>
  </a>
				)
		}
		return (
  <Link
    to={itemPath}
			>
    {icon || ''}<span>{name}</span>
  </Link>
			)
	}
	// 检查授权
	checkPermissionItem = (authority, ItemDom) => {
		if (this.props.Authority && this.props.Authorized.check) {
			const { check } = this.props.Authorized;
			return check(authority, ItemDom);
		}
		return ItemDom;
	}
	handleOpenChange = (openKeys) => {
		// console.log('Menu中的openKeys', openKeys);
		// SubMenu 展开/关闭的回调
		const lastOpenKey = openKeys[openKeys.length - 1];
		// isMainMenu为false时，没有展开的子菜单
		const isMainMenu = this.menus.some(
			item => lastOpenKey && (item.key === lastOpenKey || item.path === lastOpenKey)
		)
		// console.log('isMainMenu', isMainMenu);
		this.setState({
			openKeys: isMainMenu ? [lastOpenKey] : [...openKeys],
		}, () => {
			// console.log('handleOpenChange_sstopenKeys', this.state.openKeys);
		});
	}
	render() {
		const {
			logo,
			collapsed,
			location: { pathname },
			onSelect,
			toggle
		} = this.props;
		// console.log('SiderMenuProps', this.props);
		// console.log('collapsed', collapsed);
		const { openKeys: { menuProps } } = this.state;
		// console.log('this.state.openKeys', menuProps);
		// 折叠菜单不显示popup menu
		// openKeys：当前展开的 SubMenu 菜单项 key 数组
		const openKeys = collapsed ? {} : { menuProps }
		// console.log('menuProps', menuProps);
		// 如果路径不匹配，使用最近的父节点的key
		// selectedKeys：当前选中的菜单项 key 数组
		let selectedKeys = this.getSelectedMenuKeys(pathname);
		// console.log('selectedKeys', selectedKeys);
		const classString = classNames({[styles.collapse]: collapsed})
		if (!selectedKeys.length) {
			selectedKeys = [openKeys[openKeys.length - 1]];
		}
		const iconType = collapsed ? 'left-circle-o' : 'right-circle-o'
		return (
  <div className={styles.sider}>
    <div className={styles.logo} key='logo'>
      <img src={logo} alt='logo' className={classString} />
      { /* <h1>{data.common.systemName}</h1> */ }
    </div>
    <Menu
      {...openKeys}
      key='Menu'
      theme='dark'
      mode='inline'
      onOpenChange={this.handleOpenChange}
      selectedKeys={collapsed ? [] : selectedKeys}
      className={styles.menu}
      inlineCollapsed={collapsed}
      onSelect={onSelect}
    >
      {this.getNavMenuItems(this.menus)}
      <Menu.Item key='collapsed_icon' className={styles.toggle}>
        {toggle ? <Icon type={iconType} key={0} onClick={this.toggle} className={styles.trigger} /> : ''}
      </Menu.Item>
    </Menu>
  </div>
		);
	}
}
// -----------------------------------------------------
// icon 可以是 string || ReactNode
// icon: 'setting'
// icon: 'http://demo.com/icon.png'
// icon: <Icon type="setting" />
const getIcon = (icon) => {
	if (typeof icon === 'string' && icon.indexOf('http') === 0) {
		return <img src={icon} alt='icon' className={styles.icon} />
	}
	if (typeof icon === 'string') {
		return <Icon type={icon} />
	}
	return icon;
}
