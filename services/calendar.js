module.exports = class Calendar {
    constructor(...events) {
        this.events = [events];
    }
    deleteEvent(event){
        this.events = this.events.filter(this_event => this_event != event);
    }
    addEvent(event){
        this.events.append(event);
    }
}
