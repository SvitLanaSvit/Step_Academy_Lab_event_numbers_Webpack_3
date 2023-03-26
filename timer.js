const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

function start(num){
    let count = num;

    // Use setInterval to display a countdown from num to 0
    const interval = setInterval(()=>{
        console.log(count);
        count--;

        if(count < 0){
            clearInterval(interval);
            eventEmitter.emit('timer-done');
        }
    }, 1000);
}

eventEmitter.on('timer-done', ()=>{
    console.log('Timer done!');
});

module.exports = {start};