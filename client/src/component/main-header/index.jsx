import React from 'react';
import { Button } from 'components';

const handleBack = () => {
    window.history.back()
}
const MainHeader = (props) => {
  const { title, btnCancel, btnOk, btnContinue, children, ...otherProps } = props
  const wrapStyle = {
    'width': '100%',
    'height': '98px',
    'display': 'flex',
    'padding': '16px 24px',
    'justifyContent': 'space-between',
    'backgroundColor': '#fff',
  }
  const titleStyle = {
    'fontSize': '20px',
    'lineHeight': '28px',
    'color': 'rgba(0, 0, 0, 0.85)',
  }
  return (
      <div style={wrapStyle} {...otherProps}>
        <span style={titleStyle}>{ title }</span>
        <span>
          <Button onClick={() => handleBack()}>{ btnCancel || '取消' }</Button>
          { btnContinue && <Button style={{'marginLeft': '8px'}}>{ btnContinue }</Button> }
          { children || <Button type='primary' style={{'marginLeft': '8px'}}>{ btnOk || '保存' }</Button> }
        </span>
      </div>
    )
}

export default MainHeader

