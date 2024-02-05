const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please turn of the motor!');
  setTimeout(()=>{
    console.log('please turn of the motor! Its a gentel reminder');

  },3000);
});
console.log("The script is running")
myEmitter.emit('waterfull');
console.log("The script is still running")

//myEmitter.emit('event');