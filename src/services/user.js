const {getToken, getAPIError} = require("./utils");
const API_URL = `${process.env.REACT_APP_API_URL}`;


const getCurrentUser = () => {
    return fetch(`${API_URL}/users/me`, {
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

const updateUser = (user) => {
    console.log(JSON.stringify(user));
    return fetch(API_URL + "/users/me",
        {
            method: "PUT",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Authorization": getToken()
            },
        })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            })
        }).catch((err) => {
            console.log('error', err);
            return err;
        });
};

function getUser(user_id) {
    return fetch(`${API_URL}/users/`, {
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
    getCurrentUser,
    updateUser
};