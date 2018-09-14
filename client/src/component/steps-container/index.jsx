import React from 'react';
import styles from './index.less';


export default (props) => {
	const { title, children, ...restProps } = props
	return (
		<div {...restProps}>
			<div className={styles.title}>{title}</div>
			{children}
		</div>
	)
}

