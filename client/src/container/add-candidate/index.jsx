import React from 'react'
import map, { dataMap } from './map.js';
import { Alert, Divider } from 'components';
import FormInfo, { generator, Submit } from 'component/form-info';
import styles from './index.less'

export default class AddCandidate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notice: ''
    }
  }
  handleChange = (key, value) => {
    console.log(key, value)
  }
  onSubmit = () => {
    console.log('表单提交')
  }
  handleBack = (e) => {
    e.preventDefault()
    window.history.back()
  }
  render () {
    return (
      <div>
        <div className={styles.subheading}>
          <a href='#' onClick={this.handleBack}>返回</a><Divider type='vertical' />添加候选人
        </div>
        <FormInfo
          onSubmit={this.onSubmit}
          className='content'
          >
          {
            this.state.notice &&
            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type='error' showIcon closable />
          }
          {
            Object.keys(Info).map((item, i) => React.createElement(Info[item], {key: i, name: item}))
          }
          <Submit className='saveButton'>保存并继续添加</Submit>
          <Submit className='saveButton'>保存</Submit>
        </FormInfo>
      </div>
    )
  }
}
const Info = {};
Object.keys(map).forEach((item) => {
  Info[item] = generator({
    defaultProps: map[item].props,
    defaultRules: map[item].rules,
    type: item,
    title: dataMap[item],
    itemClass: map[item].itemClass,
  })(map[item].component)
})






