const API_URL = `${process.env.REACT_APP_API_URL}`;


const updateUser = (user) => {
    console.log(JSON.stringify(user));
    return fetch(API_URL + "/users/register",
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log('error', err);
            })
        });
};


module.exports = {
    getUser
};