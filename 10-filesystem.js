//calling the module and the methods of that module ('fs' in this case)
const {readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./first.txt','utf8')
const second = readFileSync('./subfolder/test.txt','utf8')

//if the file is not there it will be created with this method
writeFileSync('./first.txt', `Here is the result: ${first} , ${second}` )
writeFileSync('./nigga.txt',`Nigga nigga nigga nigga nigga nigga nigga nigga nigga`)