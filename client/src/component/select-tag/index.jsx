import React from 'react';
import { Tag, Icon } from 'components'

import styles from './index.less';

const VALUE = 'VALUE'
const CODE = 'CODE'
export default class SelectTag extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false,
      action: '展开',
      type: 'down'
		}
	}
  handleClick = (e) => {
    e.preventDefault()
    this.setState((pre) => ({
          action: (pre.action === '展开') ? '收起' : '展开',
          type: (pre.type === 'down') ? 'up' : 'down',
        }));
  }
	render() {
		const {dataSource, handleTagChange} = this.props
		const {checked, action, type} = this.state
		return (
			<div className={styles.container}>
          <div className={styles.title}>职位 ：</div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Tag
                hover
                key='allTag'
                size='small'
                className={'ml18'}
                checked={checked}
                onChange={(e) => handleTagChange(e.target, '')}
              >全部</Tag>
            </span>
              {
                dataSource.map((data, i) => {
                    if (i < 8) {
                        return (<span 
                        	className={styles.tag}>
	                        <Tag
	                          hover
	                          key={`${data[CODE]}${data[VALUE]}`}
	                          size='small'
	                          className={'ml18'}
	                          checked={checked}
	                          onChange={(e) => handleTagChange(e.target, data[CODE])}
                        >{data[VALUE]}</Tag></span>)
                    }
                      })
              }
          </div>
          <div className={styles.title}><a href='#' onClick={(e) => {this.handleClick(e)}}>{action} <Icon type={type} /></a></div>
        </div>
		);
	}
}