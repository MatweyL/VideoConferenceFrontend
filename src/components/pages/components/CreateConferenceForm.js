import React, {useState} from "react";
import {createConference} from "../../../services/conference";
import LabeledInput from "../../base/LabeledInput";


const CreateConferenceForm = ({addConference, ...props}) => {

    const [name, setName] = useState();
    function createAndEnter() {
        createConference({name: name}).then(r => {
            if (r.error) {
                console.log("Ошибка");
            } else {
                addConference(r)
            }
        })
    }
    return (
        <div>
            <LabeledInput type="text" onChangeHandler={e => setName(e.target.value)}></LabeledInput>
            <button onClick={createAndEnter} className="">Создать</button>
        </div>
  )
}

export default CreateConferenceForm;