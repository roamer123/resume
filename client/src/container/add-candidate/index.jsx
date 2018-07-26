import React from 'react'
// import PropTypes from 'prop-types';
import map, { dataMap } from './map.js';
import { Alert, Divider } from 'components';
import FormInfo, { generator, Submit } from 'component/form-info';
import { services, urls } from 'api'
import styles from './index.less'

export default class AddCandidate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notice: ''
    }
  }
  handleChange = (key, e) => {
    console.log(key, e.target.value)
    this.setState({
      [key]: e.target.value
    })
  }
  onSubmit = () => {
    console.log('表单提交')
    services.get(urls.candidateAdd, { TYPE: 'TECHNOLOGY_DIRECTION' }, this.addCandidateSuccess)
  }
  addCandidateSuccess = (data) => {
    console.log(data)
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
            <Alert
              style={{ marginBottom: 24 }}
              message={this.state.notice}
              type='error'
              showIcon
              closable />
          }
          {
            Object
            .keys(Info)
            .map((item, i) => React.createElement(Info[item], {
              key: i,
              name: item,
              value: this.state[item] || '',
              onChange: (e) => this.handleChange(item, e)}))
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






