import React from "react";
import {createConference} from "../../../services/conference";


const CreateConferenceForm = () => {
    function createAndEnter() {
        createConference().then(r => {
            if (r.error) {
                console.log("Ошибка")
            } else {

            }
        })
    }
    return (
        <div>
            <button onClick={createAndEnter} className="">Создать и войти</button>
        </div>
  )
}

export default CreateConferenceForm;