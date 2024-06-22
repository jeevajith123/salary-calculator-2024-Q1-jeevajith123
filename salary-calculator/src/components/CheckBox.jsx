import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    primary: " ",
};
const sizes = {
    xs: " h-[16px] w-[16px] ",
    sm: " h-[24px] w-[24px] ",
};

const CheckBox = React.forwardRef(
    (
        {
            className = "",
            name = "",
            children,
            label = "",
            id = "checkbox_id",
            onChange,
            variant = "primary",
            size = "xs", // Corrected from "sx" to "xs"
            ...restProps
        },
        ref
    ) => {
        const handleChange = (e) => {
            if (onChange) {
                onChange(e);
            }
        };

        return (
            <label htmlFor={id} className={`${sizes[size]} ${variants[variant]} ${className}`}>
                <input
                    type="checkbox"
                    name={name}
                    id={id}
                    onChange={handleChange}
                    ref={ref}
                    {...restProps}
                />
                {label && <span>{label}</span>}
            </label>
        );
    }
);

CheckBox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['primary']),
    size: PropTypes.oneOf(['xs', 'sm']),
};

export {CheckBox};