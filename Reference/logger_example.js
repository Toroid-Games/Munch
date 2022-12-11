const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
    }
}

//module.exports = Logger;
// normally in index.html or some other file and if thats true uncomment the module exports line and line below
// const Logger = require('./logger_example')
logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Yo mofos logger logs shit');
