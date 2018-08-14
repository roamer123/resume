import React from 'react'
import classNames from 'classnames'

import styles from './index.less'
const VALUE = 'VALUE'
const CODE = 'CODE'
export default class FilterStep extends React.Component {
  render () {
    const {colums, data, handleStep, active} = this.props
    return (
        <ul className={styles.filter_group}>
          {
          colums.map((li, i) => {
                const step = li[VALUE]
                const code = li[CODE]
                return (
                  <li
                    onClick={(e) => handleStep(e, step, li)}
                    key={i}
                 >
                    <p
                      className={classNames(styles.step, {active: code === active})}
                     >
                       <span className={classNames('mr8', styles.circle, {active_bg: code === active})} />
                       {`${step}`}
                     </p>
                    <p className={classNames(styles.data, {active: code === active})}>{`${data[code] || 0}`}</p>
                    <div className={styles.bow} />
                  </li>

                )
              }
            )
          }
        </ul>
    )
  }
}

