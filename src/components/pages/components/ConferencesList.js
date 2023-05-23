import React from 'react';
import ConferenceItem from "./ConferenceItem";

const ConferencesList = ({conferencesFull, currentUser, ...props}) => {
    return (
        <div>
            {conferencesFull ?
            conferencesFull.map(conferenceFull => (
                <ConferenceItem conferenceFull={conferenceFull} currentUser={currentUser}></ConferenceItem>
            ))
                :
                <div>Вы пока не создавали и не участвовали в конференциях</div>
            }

        </div>
    )
}

export default ConferencesList;