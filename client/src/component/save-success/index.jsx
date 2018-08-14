import React from 'react';
import { Icon, Table } from 'components'
import classNames from 'classnames';
import styles from './index.less'
export default class SaveSuccess extends React.Component {
  render () {
    const {
      columns,
      data,
      title,
      detail,
      type,
      className,
      ...otherProps
    } = this.props
    return (
      <div className={classNames(styles.container, className)} {...otherProps}>
        <Icon type={type || 'check-circle'} className={styles.icon} />
        <p className={styles.title}>{title || '保存成功'}</p>
        <p className={styles.detail}>{detail}</p>
        <Table columns={columns || []} dataSource={data || []} />
      </div>
    )
  }
}
