const {saltshaker,errors} =require("../util");
module.exports = class User {
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

    /*
    Member section - For Auth and profiles.
     */
    static initPassport(app) {
        //TODO
    }

    /*
    Talker section - For interfacing with the Chat class.
    @todo - Remove usage of Chats and switch to Groups. However, this will be later.
    */
    join(...chats){
        for(let chat of chats){
            if(!this.updateVisibles.includes(chat)) {
                this.emit("chat","add",chat.id);
                this.retrieveData(0,chat);
            }
            else {
                this.throw(0,chat.id);
            }
        }
    }
    leave(...chats){
        const removed=this.updateVisibles.filter(chat=>chats.contains(chat)).map(chat=>chat.id);
        const kept=this.updateVisibles.filter(chat=>!chats.contains(chat));
        this.emit("chat","remove",...removed);
    }
    /**
     * 
     * @param {Number} i - The distance from the most recent post from which to retrieve messages.
     * @param {Chat} chat - The Chat from which to update information.
     */
    fetchUpdates(i,chat){
        const messages=this.updateVisibles.getData(i,parseInt(process.env.UPDATE_MESSAGES));
        this.emit("chat","messages",chat.id,i,messages);
    }
    emit(event,...info){
        if(userEvents.includes(event)) this.socket.emit("chat",...info);
        else {
            console.log(`Attempted to use invalid event type ${event}`);
            this.throw(1,process.env.MODE==="development"?event:null);
        }
    }
}