import React from 'react';

const Body = ({fullPageMode, setFullPageMode, ...props}) => {
    const bodyClassName = (fullPageMode ? "" : "container") + " body";
    return (
        <div className={bodyClassName}>
            {props.children}
        </div>
    );
};


export default Body;
