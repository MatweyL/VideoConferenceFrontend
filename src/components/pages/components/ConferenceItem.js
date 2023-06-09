import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ParticipantsList from "./ParticipantsList";

const ConferenceItem = ({conferenceFull, currentUser, ...props}) => {
    const conference = conferenceFull.conference;
    const participants = conferenceFull.participants
    const conferenceUrl = `/conferences/${conference.id}`
    const [verboseParticipants, setVerboseParticipants] = useState([]);
    const isCreator = currentUser.user ? conferenceFull.conference.creator_id === currentUser.user.id : false;
    return (
        <div className="border mt-3">
                <div className="col p-3 bg-light border-bottom text-center">
                    {conference.is_finished ? <span className="h5 text-black text-decoration-none">{conference.name}</span> :
                        <Link className="h5 text-black text-decoration-none" to={conferenceUrl}>{conference.name}</Link>}
                </div>
                <div className="row p-3">
                    <div className="col-4">
                        <div>
                            {conference.is_finished ? <span></span>:
                            <Link to={conferenceUrl}>Ссылка</Link>}
                        </div>
                        <div>Начата: {conference.created}</div>
                        <div>{conference.is_finished ?  <span>Завершена: {conference.finished}</span> : <span></span>}</div>
                        <div>Вы: {isCreator ? <span className="text-success">Создатель</span> : <span  className="text-primary">Участник</span>}</div>
                    </div>
                    <div className="col-4">
                        {conference.is_finished ? <div className="text-danger">Завершена</div> : <div className="text-success">Активна</div>}
                    </div>
                    <div className="col-4">
                        Участники: <ParticipantsList participants={conferenceFull.participants}></ParticipantsList>
                    </div>
                </div>


            </div>)
}

export default ConferenceItem;
