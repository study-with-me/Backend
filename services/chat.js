const User =require("./user");
const {saltShaker} = require("../util");
module.exports = class Chat {
    constructor(...users) {
        this.events = [];
        this.invite(...users);
        this.id=saltShaker();
    }
    /**
     * Ends the chat and removes all members.
     */
    cease() {
        for(let user of users) {
            user.leave(this);
        }
        this.events=[];
    }
    /**
     * 
     * @param  {...user} users An array of Users to add to the Chat.
     */
    invite(...users) {
        for (let user of users) {
            this.users[user.id]=user;
            user.join(this);
        }
    }
    sendMessage(message){
        this.messages.push(message);
        for(let user of this.users) {
            if(message.show(user)) user.receiveMessage(message);
        }
    }
}