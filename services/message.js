const {saltshaker,types} = require("../util");
module.exports.Message=class Message {
    constructor(type,timestamp,sender){
        this.sender=sender;
        if(types.includes(type)) this.type=type;
        else console.log(`Invalid type of message: ${type}`);
        this.timestamp=timestamp;
        this.id=saltShaker();
        this.deleted=false;
    }
    show(user){
        return !this.sender.blocked.includes(user)&&!user.blocked.includes(this.sender);
    }
    delete(){
        // this.message=`<Deleted at ${timestamp}>`;
        this.deleted=true;
        return true;
    }
}
module.exports.Participation=class Participation extends Message{
    show(user){
        return true;
    }
    delete(){
        return false;
    }
}
module.exports.Me=class Me extends Message;