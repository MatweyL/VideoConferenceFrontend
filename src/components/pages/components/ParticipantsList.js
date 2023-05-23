import ConferenceItem from "./ConferenceItem";
import React from "react";
import Participant from "./Participant";

const ParticipantsList = ({participants, ...props}) => {
    return (
        <div>
            {participants ?
                participants.map(participant => (
                    <Participant participant={participant}></Participant>
                ))
                :
                <div>Нет участников</div>
            }
        </div>
    );
}

export default ParticipantsList;
