import React from 'react';

import Modal from 'components/modal';
import Form from 'components/form';
import Button from 'components/button';
import { Row, Col } from 'components/grid';
import Input from 'components/input';
import Select from 'components/select';

import styles from './index.less';


const FormItem = Form.Item;
const Option = Select.Option;


class SelfModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            isRule: false
           }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible,
        })
    }
    // 保存
    handleSave() {
        this.setVisible(false);
    }

    // 重置
    handleReset() {
     this.props.form.resetFields();
    }

    // 取消
    handleCancel() {
       this.setVisible(false)
    }

    setVisible(bool) {
        this.setState({
            visible: !!bool
        })
    }

    handleSelectRule(key) {
        this.setState({
            isRule: key === 'hr'
        })
    }
    renderFormItem() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Col>
            <FormItem label='姓名' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('name', {
                     rules: [{
                        required: true, message: '请输入姓名', whitespace: true
                     }, {pattern: /^[\u4e00-\u9fa5]{2,4}$/, message: '请输入2-4位的中文姓名'}]
                 })(<Input placeholder='请输入姓名' />)}
            </FormItem>
            <FormItem label='角色' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('rule', {
                  rules: [{required: true}]
              })(<Select onSelect={(key) => this.handleSelectRule(key)} placeholder='请选择角色'>
                <Option key='hr' value='hr'>hr</Option>
                <Option key='interviewer' value='interviewer'>面试官</Option>
              </Select>)}
            </FormItem>
            <FormItem label='职位' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('position', {
                  rules: [{required: true}]
              })(<Select disabled={this.state.isRule} placeholder='请选择职位'>
                <Option key='web' value='web'>web</Option>
                <Option key='java' value='java'>java</Option>
                <Option key='php' value='php'>php</Option>
                <Option key='pyhon' value='pyhon'>pyhon</Option>
              </Select>)}
            </FormItem>
            <FormItem label='部门' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('department', {
                  rules: [{required: true}]
              })(<Select disabled={this.state.isRule} placeholder='请选择部门'>
                <Option key='电销' value='web'>电销</Option>
                <Option key='网销' value='网销'>网销</Option>
                <Option key='寿险' value='寿险'>寿险</Option>
                <Option key='产险' value='产险'>产险</Option>
              </Select>)}
            </FormItem>
            <FormItem label='公司' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('company', {
                  rules: [{required: true, message: '请输入公司名称'}]
              })(<Input />)}
            </FormItem>
            <FormItem label='电话' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('telephone', {
                  type: 'number',
                  rules: [{required: true, message: '请输入有效的电话号码'}]
              })(<Input />)}
            </FormItem>
            <FormItem label='邮箱' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('email', {
                  rules: [{
                      type: 'email'
                  }, {required: true}]
              })(<Input />)}
            </FormItem>
            <FormItem label='账号' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('account', {
                  rules: [{
                      type: 'account'
                  }, {required: true}]
              })(<Input />)}
            </FormItem>
            <FormItem label='密码' labelCol={{span: 6}} wrapperCol={{span: 18}} className={styles.form_item_width}>
              {getFieldDecorator('password', {
                  rules: [{
                      type: 'password'
                  }, {required: true}]
              })(<Input />)}
            </FormItem>
          </Col>
        )
    }

    render() {
      const {visible} = this.state
      return (
        <Modal title='基本信息' width={500} style={{height: '500px'}}
          className={styles.warp_modal}
          visible={visible}
          footer={[
            <Button key='handleCancel' onClick={() => this.handleCancel()}>取消</Button>,
            <Button key='handleReset' onClick={() => this.handleReset()}>重置</Button>,
            <Button key='handleSave' onClick={() => this.handleSave()}>保存</Button>
          ]}
          >
          <Form onSubmit={this.handleSubmit} layout='inline' >
            <Row>
              {this.renderFormItem()}
            </Row>
          </Form>
        </Modal>
      )
    }
};

const WrappedHorizontalLoginForm = Form.create()(SelfModal);

export default WrappedHorizontalLoginForm;
