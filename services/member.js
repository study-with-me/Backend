import User from "./user";
//TODO Actually do this with Auth0 and stuff
export default class Member extends User {
    constructor(User) {
        this.socket = user.socket;
        this.id = this.socket.id;
    }
    static initPassport(app) {
        const strategy = new Auth0Strategy({
            domain: process.env.AUTH0_DOMAIN,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            callbackURL: process.env.AUTH0_CALLBACK_URL
        });
    }
}