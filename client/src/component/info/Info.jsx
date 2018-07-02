import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export default class Info extends React.Component {
	render() {
		const { title, text, className, children } = this.props;
		const classString = classNames(
			styles.wrap,
			className
		)
		return (
  <div className={classString}>
    <span className={styles.title}>{title}</span>
    <span className={styles.text}>{text}</span>
    {children}
  </div>
			)
	}
}


