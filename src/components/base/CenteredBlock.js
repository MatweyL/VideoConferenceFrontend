import React from "react";

const CenteredBlock = (props) => {
    return (<div className="d-flex justify-content-center">
        {props.children}
    </div>);
}


export default CenteredBlock;