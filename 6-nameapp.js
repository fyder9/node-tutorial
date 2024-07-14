//Importing our own module
const names = require('./4-names')
//we only have access to the names shered with export in 4-names module

//console.log(names)

//check the output!

//we can do the same with functions
const sayHi = require('./5-utils')

sayHi(names.fyder)
sayHi(names.fede)