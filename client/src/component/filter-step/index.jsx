import React from 'react'
import {liCreate} from 'utils/creator';
import styles from './index.less'

export default class FilterStep extends React.Component {
  render () {
    const {colums, stepsMap, handleStep, active} = this.props
    return (
      <div className={styles.filter_step}>
        <ul className={styles.filter_group}>
          {
              liCreate({
                lis: colums,
                liData: stepsMap,
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
