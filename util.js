const saltshaker=require("randomstring").generate;
const errors={[-1]:"There was an error our our end. Oops!",0:"You are already in this chat.",1:"An invalid message was sent.",};


module.exports = {saltshaker,errors};