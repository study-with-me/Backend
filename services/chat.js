import User from "./user";
export default class Chat {
    constructor(...talkers) {
        this.events = [];
        this.invite(...talkers);
        this.id=saltshaker();
    }
    /**
     * ends the chat and removes all members.
     */
    cease() {
        for(let talker of talkers) {
            talker.leave(this);
        }
        this.events=[];
    }
    /**
     * 
     * @param  {...Talker} talkers An array of Talkers to add to the Chat.
     */
    invite(...talkers) {
        for (let talker of talkers) {
            talker.join(this);
        }
    }
}