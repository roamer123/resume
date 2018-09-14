import React from 'react';
import { Steps, Popover } from 'components';
import styles from './index.less';

const Step = Steps.Step;

const customDot = (dot, { status, index }) => (
  <Popover content={<span>step {index} status: {status}</span>}>
    {dot}
  </Popover>
);
export default (props) => (
	<div className={styles.container}>
		 <Steps current={props.step || 0} progressDot={customDot} style={{'width': '60%'}}>
	    {
	    	stepColumns.map((step, i) => (
	    		<Step key={step} title={step} description='' onClick={(e) => props.handleClick(i)} />
    		))
	    }
	  </Steps>
  </div>
)
