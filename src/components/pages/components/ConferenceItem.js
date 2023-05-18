import React from 'react';

const ConferenceItem = ({conferenceFull, ...props}) => {
    return (<div>
        {conferenceFull.conference.id}
    </div>)
}

export default ConferenceItem;
