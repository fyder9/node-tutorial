//claim the built-in system module 'os'
const os = require('os')

//claim user information
const user=os.userInfo()

//method that returns system uptime in seconds
console.log(`The system has been up for ${os.uptime()} seconds`)

//now creating an object with some attributes about the system
//claimed with os module methods
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)