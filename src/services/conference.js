const {getToken, getAPIError} = require("./utils");
const API_URL = `${process.env.REACT_APP_API_URL}`;


const getCurrentUserConferences = () => {
    return fetch(`${API_URL}/conferences/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": getToken()
        },
    }).then(r => {
        if (r.status !== 200) {
            return getAPIError(r.status);
        }
        return r.json().then(data => {
            console.log("data" + data);
            return data;
        })
    }).catch(err => {
        console.log("error" + err);
        return err;
    })
}


module.exports = {
    getCurrentUserConferences
};