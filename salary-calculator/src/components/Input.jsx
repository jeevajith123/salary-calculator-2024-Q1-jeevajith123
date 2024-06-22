import React from 'react'; // Added missing React import
import PropTypes from 'prop-types';

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            label ="",
            prefix,
            suffix,
            onChange,

            ...restProps
        },
        ref,
    ) =>{
        return (
            <label className={`${className} undefined `}>
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,

};
export {Input};