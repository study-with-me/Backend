const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
import {saltshaker,errors} from "../util";
export default class User {
    constructor(socket) {
        this.socket=socket;
        const id=saltshaker();
        this.id=id;
        socket.id=id;
    }
    throw(id,...info){
        if(id>=errors.length) return this.socket.emit("error",-1);
        this.socket.emit("error",id,...info);
    }
}