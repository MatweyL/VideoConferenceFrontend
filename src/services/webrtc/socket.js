import { io } from 'socket.io-client'
import {getToken} from "../utils";

// в производственном режиме сервер и клиент будут находиться в одном источнике (origin),
// а в режиме для разработки - в разных
const SERVER_URI = `${process.env.REACT_APP_API_URL}`;


const socket = io(SERVER_URI, {
    extraHeaders: {
        Authorization: getToken()
    }
});

export default socket