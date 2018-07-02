import React, { PureComponent } from 'react'
import { Icon, Menu, Spin, Dropdown, Button, Divider, Input } from 'components'
import { getTodayTime } from 'utils/utils'

import styles from './index.less'

export default class GlobalHeader extends PureComponent {
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };
  getHeaderOneFloorRender() {
    const {
      currentUser,
      systemName,
      routerPath,
      centerChildren,
      onMenuClick,
      onQuit,
      toggle,
      collapsed
    } = this.props;

    const iconType = collapsed ? 'menu-unfold' : 'menu-fold'

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key='userCenter' disabled>
          <Icon type='user' />个人中心
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type='setting' key='setting' />设置
        </Menu.Item>
      </Menu>
    );
    const today = getTodayTime('today');


      return (
        <div className={styles.header_o_floor}>
          {toggle ? <Icon type={iconType} key={0} onClick={this.toggle} className={styles.trigger} /> : ''}
          <span className={styles.systemName} >
            {systemName}
          </span>
          <Divider type='vertical' style={{ fontSize: '20px' }} />
          <span className={styles.routerPath}>
            {routerPath}
          </span>
          <div className={styles.time}>
            {centerChildren || today}
          </div>
          <div className={styles.right}>
            {currentUser.name ? (
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Icon type='user' className={styles.userIcon} />
                  <span className={styles.name}>{currentUser.name}</span>
                </span>
              </Dropdown>
            ) : (
              <Spin size='small' style={{ marginLeft: 8 }} />
              )}
            <Button type='create' icon='logout' className={styles.quit} onClick={onQuit} />
          </div>
        </div>
      )
  }

  getHeaderTowFloorRender() {
    const {
      currentUser,
      systemName,
      routerPath,
      leftChildren,
      centerChildren,
      onMenuClick,
      onQuit
    } = this.props;
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key='userinfo' disabled>
         个人中心
        </Menu.Item>
        <Menu.Item key='setinfo' disabled>
          设置
        </Menu.Item>
      </Menu>
    );
    const today = getTodayTime('today');


    return (
      <div className={styles.header_t_floor}>
        <div className={styles.t_floor_box_1}>
          <div className={styles.title}>
            <span className={styles.systemName} >
              {systemName}
            </span>
            <Divider type='vertical' style={{ fontSize: '20px' }} />
            <span className={styles.routerPath}>
              {routerPath}
            </span>
          </div>
          {leftChildren || ''}
        </div>
        <div className={styles.t_floor_box_2}>
          {centerChildren || (<div className={styles.today}>{today}</div>)}
        </div>
        <div className={styles.t_floor_box_3}>
          <div className={styles.userbox}>
            {currentUser.name ? (
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Icon type='user' className={styles.userIcon} />
                  <span className={styles.name}>{currentUser.name}</span>
                </span>
              </Dropdown>
            ) : (
              <Spin size='small' style={{ marginLeft: 8 }} />
              )}
            {<Input type='text'className={styles.search} placeholder='搜索...' />}
          </div>
          <Button type='quit' icon='logout' className={styles.quit} style={{ background: '#5093e1', color: '#fff' }} onClick={onQuit} />
        </div>
      </div>
    )
  }


  render() {
    const { type } = this.props;
    return type === 'double' ? this.getHeaderTowFloorRender() : this.getHeaderOneFloorRender();
  }
}
