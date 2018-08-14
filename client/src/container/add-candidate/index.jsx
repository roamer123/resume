import React from 'react'
// import PropTypes from 'prop-types';
import map, { dataMap } from './map.js';
import {
  successMsg,
  errorMsg,
  warningMsg,
} from 'utils/message'
import {
  Alert,
  Divider,
  Upload,
  Icon,
  message
} from 'components';
import FormInfo, { generator, Submit } from 'component/form-info';
import { services, urls } from 'api'
import styles from './index.less'
import {
  addWrapper
} from './style.js'

const Dragger = Upload.Dragger;
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
    const props = {
      name: 'file',
      multiple: true,
      action: 'http://localhost:7001/upload',
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          successMsg(`${info.file.name} 上传成功.`)
        } else if (status === 'error') {
          errorMsg(`${info.file.name} 上传失败.`)
        }
      },
    };
    return (
      <addWrapper>
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
          <Dragger {...props}>
            <p className='upload-drag-icon'>
              <Icon type='inbox' />
            </p>
            <p className='upload-text'>Click or drag file to this area to upload</p>
          </Dragger>
          <Submit className='saveButton'>保存并继续添加</Submit>
          <Submit className='saveButton'>保存</Submit>
        </FormInfo>
      </addWrapper>
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






