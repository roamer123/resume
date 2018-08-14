import React from 'react';



const Main = (props) => {
	const {children, margin, backgroundColor, ...otherProps} = props
  return (
    <div style={{
    	'margin': margin || '24px',
    	'backgroundColor': backgroundColor || '#fff',
    	'overflow': 'auto',
    }}
      {...otherProps}
    >
      { children }
    </div>
    )
}

export default Main
