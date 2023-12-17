const EventEmitter = require('events');

class Folder extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  emitEvent(event, ...args) {
    this.emit(event, ...args);
  }
}

module.exports = Folder;