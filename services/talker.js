import User from "./user";
export default class Talker extends User{
    /**
     * 
     * @param {User} user - The User to be.
     * @param {[Chat]} chats - An array of the chats in which the Talker is involved.
     */
    constructor(user,chats){
        this.socket=user.socket;
        this.id=this.socket.id;
        this.join(...chats);
    }
    join(...chats){
        for(let chat of chats){
            if(!this.chats.includes(chat)) {
                this.emit("add",chat.id);
                this.retrieveData(0,chat);
            }
            else {
                this.throw(0,chat.id);
            }
        }
    }
    leave(...chats){
        const removed=this.chats.filter(chat=>chats.contains(chat)).map(chat=>chat.id);
        const kept=this.chats.filter(chat=>!chats.contains(chat));
        this.emit("remove",...removed);
    }
    /**
     * 
     * @param {Number} i - The distance from the most recent post from which to retrieve messages.
     * @param {Chat} chat - The Chat from which to update information.
     */
    retrieveData(i,chat){
        const messages=this.chats.getData(i,parseInt(process.env.UPDATE_MESSAGES));
        this.emit("messages",chat.id,i,messages);
    }
    emit(...info){
        this.socket.emit("chat",...info);
    }
}