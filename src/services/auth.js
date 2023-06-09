const {getAPIError, removeToken} = require("./utils");
const API_URL = `${process.env.REACT_APP_API_URL}`;


const authUser = (user) => {
    return fetch(`${API_URL}/users/auth`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(r => {
        if (r.status !== 200) {
            return getAPIError(r.status)
        }
        return r.json().then(data => {
            console.log(data);
            return data;
        })
    }).catch(err => {
        console.log(err);
        throw err;
    })
}

const registerUser = (user) => {
    return fetch(`${API_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => {
        if (response.status === 201) {
            return response.json().then(data => {
                return data;
            })
        }
        return getAPIError(response.status, response.detail)
    });
}

function isUserAuthenticated() {
    return localStorage.getItem('token');
}


function logout() {
    removeToken();
}


module.exports = {
    authUser,
    registerUser,
    isUserAuthenticated,
    logout
};