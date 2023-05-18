import React from 'react';
import ConferenceItem from "./ConferenceItem";

const ConferencesList = ({conferencesFull, ...props}) => {
    return (
        <div>
            {conferencesFull ?
            conferencesFull.map(conferenceFull => (
                <ConferenceItem conferenceFull={conferenceFull}></ConferenceItem>
            ))
                :
                <div>Вы пока не создавали и не участвовали в конференциях</div>
            }

        </div>
    )
}

export default ConferencesList;