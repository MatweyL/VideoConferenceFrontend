import React from "react";

const ReadOnlyInput = ({title, value, ...props}) => {
    return (<div className="input col-md-12">
        <label className="labels mt-3 mb-2">{title}</label>
        <div className="form-control">{value}</div>
    </div>);
}


export default ReadOnlyInput;