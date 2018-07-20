import React from 'react'
import {liCreate} from 'utils/creator';
import styles from './index.less'

export default class FilterStep extends React.Component {
  render () {
    const {colums, data, handleStep, active} = this.props
    return (
      <div className={styles.filter_step}>
        <ul className={styles.filter_group}>
          {
              liCreate({
                lis: colums,
                liData: data,
                handleClick: handleStep,
                active,
                addonAfter: '人'
              })
          }
        </ul>
      </div>
    )
  }
}
