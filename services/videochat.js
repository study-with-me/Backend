class User {
  constructor(host, port, id) {
    this.host = host;
    this.port = port;
    this.id = id;
  }
  initiatePeer(id) {
    this.peer = new Peer(this.id, {
      host: this.host,
      port: this.port,
      secure: true
    });
  }
  connectTo(id) {
    this.conn = this.peer.connect(id);
  }
  callTo(id) {
    this.call = this.peer.call(id, localStream);
  }
  startChat() {
    async () => {
      const localStream = await navigator.mediaDevices.getUserMedia({
        video: true
      });
    };
  }
}
