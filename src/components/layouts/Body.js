import React from 'react';

const Body = ({fullPageMode = true, fullWidthMode, ...props}) => {
    const widthStyle = fullWidthMode ? " " : " container ";
    const heightStyle = fullPageMode ? " body " : " ";
    const bodyClassName = widthStyle + heightStyle;
    return (
        <div className={bodyClassName}>
            {props.children}
        </div>
    );
};


export default Body;
