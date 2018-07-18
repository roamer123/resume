import React from 'react'
import {liCreate} from 'utils/creator';
import styles from './index.less'

export default class FilterStep extends React.Component {
  render () {
    const {filters, stepsMap, handleStep} = this.props
    return (
      <div className={styles.filter_step}>
        <ul className={styles.filter_group}>
          {
              liCreate({
                lis: filters,
                liMap: stepsMap,
                handleClick: handleStep,
                addonAfter: '人'
              })
          }
        </ul>
      </div>
    )
  }
}
