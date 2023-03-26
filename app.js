const EventEmitter = require('events');
const timer = require('./timer');

const eventEmitter = new EventEmitter();

// Set up event listener for "start-timer" event
eventEmitter.on('start-timer', (num)=>{
    timer.start(num);
});

// Start the timer with a value of 10
eventEmitter.emit('start-timer', 10);