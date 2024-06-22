import React from 'react';

const sizes = {
    heading_4: "tracking-[-0.02px] text-xl font-bold",
    body___large___semibold: "tracking-[-0.10px] text-base font-semibold",
    body___default___semibold: "tracking-[0.20px] text-sm font-semibold",
    textxs: "text-sm font-medium",
};

const Heading =({children,className ="",size="body___large___semibold", as, ...restProps}) =>{
    const Component =as || "h6";

    return(
        <Component className={`text-color_usage-text_primary font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export {Heading};