import React from "react";

const PageTitle = (props) => {

    const titleClass = "m-3 " + (props.notDisplayCenter ? "" : "text-center");
    return (<h2 className={titleClass}>
        {props.title}
    </h2>);
}


export default PageTitle;