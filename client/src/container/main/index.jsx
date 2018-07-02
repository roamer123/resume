import React, { Component } from 'react';
import classNames from 'classnames';


import Layout, { Sider, Content } from 'components/layout';
import TreeMenu from 'component/tree-menu';
import RightHeader from 'component/right-header';
import Overlook from 'component/overlook';
// import StandardTable from 'component/standard-table'
import collapsedIcon from 'assets/images/left-arrow.png';

import styles from './index.less'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      collapsed: false,
    }
  }

  toggleTeam = (id) => {
    console.log('teamId', id)
    id = id.length && id[0]
    if (/^[0-9]/.test(id)) {
      return false
    } else {
      this.setState({
        id: id,
      })
    }
  }
  handleToggleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render () {
    const { id, collapsed } = this.state;
    const span = {
      fold: '0',
      unfold: '19'
    }
    const classToggle = classNames({
      [styles.toggle_collapsed]: collapsed,
    }, styles.toggle)
    return (
      <Layout className={styles.main} >
        <Sider span={span} collapsed={this.state.collapsed} className={styles.tree_sider}>
          { collapsed ? ''
            : <TreeMenu onToggle={this.toggleTeam} />
          }
          <div className={classToggle} onClick={this.handleToggleClick}>
            <img src={collapsedIcon} />
          </div>
        </Sider>
        <Layout className={styles.main_right}>
          <Content style={{position: 'relative'}}>
            <RightHeader id={id} />
            <Overlook id={id} />
            {/* <StandardTable id={id} /> */}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
