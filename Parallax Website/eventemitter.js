const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('attendence', () => {
  console.log('mark your attendence');
  setTimeout(() => {
    console.log('you are late');
  }, 4000);
});
myEmitter.emit('attendence');
console.log('code is still runnin');