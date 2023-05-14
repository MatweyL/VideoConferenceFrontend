import React from "react";

const LabeledInput = ({type, placeholder, inputLabel, value, readOnly, ...props}) => {

    return (
        <div className="input col-md-12">
            <label className="labels mt-3 mb-2">{inputLabel}</label>
            <input type={type}
                   className="form-control"
                   placeholder={placeholder}
                   defaultValue={value}
                   readOnly={readOnly}
            />
        </div>
    );
}


export default LabeledInput;