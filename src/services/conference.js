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


const createConference = (conference) => {
    return fetch(`${API_URL}/conferences`, {
        method: "POST",
        body: JSON.stringify(conference),
        headers: {
            "Content-Type": "application/json",
            "Authorization": getToken()
        },
    }).then(r => {
        if (r.status !== 201) {
            return getAPIError(r.status);
        }
        return r.json().then(data => {
            console.log("data" + data);
            return data;
        })
    });
}

function getConference(path_with_conference_id) {
    return fetch((`${API_URL}${path_with_conference_id}`), {
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
            return data;
        })
    }).catch(err => {
        console.log("error" + err);
        return err;
    })
}

function finishConference(path_with_conference_id) {
    return fetch((`${API_URL}${path_with_conference_id}/finish`), {
        method: "PATCH",
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

function changeConferenceJoinAccess(path_with_conference_id, isBlocked) {
    let url = `${API_URL}${path_with_conference_id}/` + (isBlocked ? "allow_joining" : "prohibit_joining")
    return fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": getToken()
                }
            }).then(r => {
                if (r.status !== 200) {
                    return getAPIError(r.status);
                }
                return r.json().then(data => {
                    console.log("data" + data);
                    return data;
                })
    })
}


module.exports = {
    getCurrentUserConferences,
    createConference,
    getConference,
    changeConferenceJoinAccess,
    finishConference
};