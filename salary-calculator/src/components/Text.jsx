import React from 'react';

const sizes = {
    body___small: "text-xs font-normal",
    body___large: "text-base font-normal",
};

const Text = ({ children, className = "", as, size = "body___large", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-color_usage-text_primary font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
}

export { Text };