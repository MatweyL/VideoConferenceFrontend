import React, {useState} from "react";
import {createConference} from "../../../services/conference";
import LabeledInput from "../../base/LabeledInput";
import CenteredBlock from "../../base/CenteredBlock";


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
            <LabeledInput inputLabel="Название конференции" placeholder="Введите название конференции" type="text" onChangeHandler={e => setName(e.target.value)}></LabeledInput>
            <CenteredBlock><button onClick={createAndEnter} className="btn btn-success mt-3">Создать</button></CenteredBlock>
        </div>
  )
}

export default CreateConferenceForm;