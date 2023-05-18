import React from 'react';

const ConferenceItem = ({conferenceFull, ...props}) => {
    return (<div>
        {conferenceFull.conference.id} {conferenceFull.conference.created}
    </div>)
}

export default ConferenceItem;
