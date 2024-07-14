//local
const secret='super secret message'

//share with exports
const fyder = 'fyder'
const fede ='fede'

//console.log(module)

//if you look at the output of this first code section
//we can see that 'exports:{}' is empty,
//that's because we decide what the module shares globally
//modules only share the minimum,
//to fill that we need module.export = {const,var,..}

module.exports = {fyder, fede}