import React from 'react'
// import PropTypes from 'prop-types';
import map, { dataMap } from './map.js';
import {
  Route,
  Switch,
} from 'react-router-dom';
// import {
//   successMsg,
//   errorMsg,
// } from 'utils/message'
import {
  Alert,
  // Upload,
  Icon,
  Table
} from 'components';
import {
  FormInfo,
  generator,
  // Submit,
  MainHeader,
  Main,
  SaveSuccess,
  Steps,
  StepsContainer,
  Upload,
} from 'component';
import { services, urls } from 'api'
import styles from './index.less'
// import { addWrapper } from './style.js'

// const Dragger = Upload.Dragger;
export default class AddCandidate extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      notice: '',
      step: 0,
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
  handleClick = (step) => {
    console.log(step)
    this.setState({
      step
    })
  }
  render () {
    const {step} = this.state
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
    <Upload text='1.简历名称需符合“职位名称+姓名+手机号.格式名”规则；2.上传的文件支持doc/pdf格式，大小不超过10M。'/>
  </FormInfo>
    const Success = <SaveSuccess
      detail='请核对候选人信息的准确性，如发现输入有误请及时修改。'
      columns=''
      data=''
    />
    const StepOne = (props) => {
      const { title, children, ...restProps } = props
      return (<div className={styles.stepOne}{...restProps}>
              <Icon type='pro-download' />
              {title || children}
            </div>)
    }
    const StepTwo = () => {
      return <Upload text='模版内所有项均为必填，请在上传之前确认内容的真实性和准确性，避免出现错误信息。' style={{'height': '168px', 'display': 'flex'}} />
    }
    const StepThree = () => {
      return <Upload text='1.简历名称建议修改为“职位名称+姓名+手机号.格式名”规则；2.上传的文件支持doc/pdf格式，大小不超过10M；3.一次上传不超过50份简历。。' style={{'height': '168px', 'display': 'flex'}} />
    }
    const StepFour = () => {
      return (
        <div>
          <SaveSuccess
            title='批量添加结束'
            detail={`成功添加20位候选人，其中5位候选人简历上传失败`}
            columns=''
            data=''
          />
           <Table columns={[]} dataSource={[]} />
        </div>
            )
    }
    const steps = {
      0: <StepOne>批量添加数据</StepOne>,
      1: <StepTwo />,
      2: <StepThree />,
      3: <StepFour />
    }
    const stepColumns = ['下载模版', '上传表格', '上传简历', '完成']
    const More = (
      <div>
        <Steps handleClick={this.handleClick} step={step} stepColumns={stepColumns}/>
        <div style={{'height': '8px', 'width': '100%', background: '#F5F5F5' }} />
        <StepsContainer title={`0${step + 1}. ${stepColumns[step]}`} style={{'padding': '0 24px', 'height': 'calc(100vh - 320px)'}} className={styles.stepContainer}>
          {steps[step]}
        </StepsContainer>
      </div>
      )
    return (
      <div>
        <MainHeader title='添加候选人' />
        <Main>
          <Switch>
            <Route exact path='/candidate/add' render={() => CandidateInfo} />
            <Route exact path='/candidate/add/success' render={() => Success} />
            <Route exact path='/candidate/add/more' render={() => More} />
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






