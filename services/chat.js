const User =require("./user");
module.exports = class Chat {
    constructor(...users) {
        this.events = [];
        this.invite(...users);
        this.id=saltshaker();
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
            user.join(this);
        }
    }
}