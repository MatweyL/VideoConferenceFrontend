

function getAPIError(statusCode, text) {
    return {
        error: true,
        statusCode: statusCode,
        text: text
    }
}


function setToken(tokenJson) {
    localStorage.setItem('token', (tokenJson.type + " " + tokenJson.token));
}


function removeToken() {
    localStorage.removeItem('token');
}

function getToken() {
    return localStorage.getItem('token');
}

module.exports = {
    getAPIError,
    getToken,
    setToken,
    removeToken
}

