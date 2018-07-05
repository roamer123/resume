import React from 'react';
import styles from './index.less'

export default class AlertInfo extends React.Component {
  render() {
    return (
      <div className={styles.alert_info}>
        {this.props.children}
      </div>
    )
  }
}
