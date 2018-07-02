import React from 'react';

export default class Content extends React.Component {
	render() {
    const pageStyle = {
      margin: '0 auto',
      textAlign: 'center',
      marginTop: '200px',
      height: '100%'
    }
		const titleStyle = {
      color: '#434e59',
      fontSize: '72px',
      fontWeight: '600',
      lineHeight: '72px',
      marginBottom: '24px',
    }
    const contentStyle = {
      color: `rgba(0, 0, 0, 0.45)`,
      fontSize: `20px`,
      lineHeight: `28px`,
      marginBottom: `16px`,
    }
		return (
  <div style={pageStyle}>
    <div style={titleStyle}>{this.props.title}</div>
    <div style={contentStyle}>{this.props.text}</div>
  </div>
		);
	}
}
