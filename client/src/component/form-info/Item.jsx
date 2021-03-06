import React from 'react';
import PropTypes from 'prop-types';

import Form from 'components/form';
// import { classNames } from 'classnames';

const FormItem = Form.Item;

export function generator({ defaultProps, defaultRules, type, title, width }) {
	return (WrappedComponent) => {
		return class BasicComponent extends React.Component {
			static contextTypes = {
				form: PropTypes.object,
			}
			render() {
				// getFieldDecorator用于和表单进行双向绑定,要传入两个参数
				// id:必填输入控件唯一标志
				// options：
					// rules: 校验规则
					// initialValue: 子节点的初始值，类型、可选值均由子节点决定
				const { getFieldDecorator } = this.context.form;
        const { onChange, defaultValue, value, rules, name, ...restProps } = this.props;
        // console.log('generator', this.props);

				const options = {};
				let otherProps = {};
				options.rules = rules || defaultRules;
				if (onChange) {
					options.onChange = onChange;
				}
				if (defaultValue || value) {
					options.initialValue = defaultValue || value;
				}
				otherProps = restProps || otherProps;

				return (
  <FormItem label={title || ''} style={{width: width}}>
    {
					              getFieldDecorator(name, options)(
  <div>
    <WrappedComponent {...defaultProps} {...otherProps} />
  </div>
					              )
					    }
  </FormItem>
				);
			}
		}
	}
}
