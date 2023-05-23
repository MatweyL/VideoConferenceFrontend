import React from "react";


const Participant = ({participant, ...props}) => {

    const userInfo = participant.user_verbose.user_info;
    const user = participant.user_verbose.user;
    const haveVerboseInfo = !!(userInfo.first_name || userInfo.last_name);
    const divClassName = participant.role === "creator" ? "text-success" : "";
    return (<div className={divClassName}>
                <span>{user.username}</span>
                {haveVerboseInfo ? <span> ({userInfo.first_name} {userInfo.last_name})</span>  : ""}
                {participant.role === "creator" ? <span> - Создатель</span> : ""}
    </div>);
}


export default Participant;
