import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function Grid(props) {
    const {prefixCls = 'dbox-card', bodyStyle, className, ...others} = props;
    const gridClassName = classNames(`${prefixCls}-grid`, className);
    return (
      <div {...others} className={gridClassName} style={bodyStyle} />
    )
};

Grid.Protypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
}

