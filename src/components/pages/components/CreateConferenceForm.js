import React from "react";
import {createConference} from "../../../services/conference";


const CreateConferenceForm = ({addConference, ...props}) => {
    function createAndEnter() {
        createConference().then(r => {
            if (r.error) {
                console.log("Ошибка")
            } else {
                addConference(r)
            }
        })
    }
    return (
        <div>
            <button onClick={createAndEnter} className="">Создать</button>
        </div>
  )
}

export default CreateConferenceForm;