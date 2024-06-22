import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, leftIcon, rightIcon }) => {
    return (
        <button className={className}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};

Button.defaultProps = {
    className: '',
};

export {Button};