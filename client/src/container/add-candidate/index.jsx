import React from 'react'
// import PropTypes from 'prop-types';
import map, { dataMap } from './map.js';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {
  successMsg,
  errorMsg,
} from 'utils/message'
import {
  Alert,
  // Divider,
  Upload,
  Icon,
} from 'components';
import {
  FormInfo,
  generator,
  // Submit,
  MainHeader,
  Main,
  SaveSuccess,
} from 'component';
import { services, urls } from 'api'
// import styles from './index.less'
// import { addWrapper } from './style.js'

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
    const CandidateInfo = <FormInfo
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
        <Icon type='achievement' style={{'fontSize': '46px', color: '#0db27a'}} />
      </p>
      <p className='upload-text' style={{'fontSize': '14px', 'lineHeight': '22px', 'color': 'rgba(0, 0, 0, 0.65)'}}>点击或拖拽文件到此区域</p>
      <p className='upload-text' style={{'fontSize': '12px', 'lineHeight': '20px', 'color': 'rgba(0, 0, 0, 0.45)'}}>1.简历名称需符合“职位名称+姓名+手机号.格式名”规则；2.上传的文件支持doc/pdf格式，大小不超过10M。</p>
    </Dragger>
  </FormInfo>
    const Success = <SaveSuccess
      detail='请核对候选人信息的准确性，如发现输入有误请及时修改。'
      columns=''
      data=''
    />
    return (
      <div>
        <MainHeader title='添加候选人' />
        <Main>
          <Switch>
            <Route exact path='/candidate/add' render={() => CandidateInfo} />
            <Route exact path='/candidate/add/success' render={() => Success} />
          </Switch>
        </Main>
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






