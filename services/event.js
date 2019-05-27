module.exports = class Event {
    constructor(name, timestamp, participants = []) {
        this.name = name;
        this.timestamp = timestamp;
        this.id=saltShaker();
        this.partipants = partipants
        this.date = timestamp.toString();
    }
    addParticipant(participant) {
        this.partipants.append(participant);
    }
    
}
