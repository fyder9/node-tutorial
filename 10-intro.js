//__dirname -path to current directory
//__filename -file name
//require  -function to use modules
//module -info about current module
//process -info about env where the program is being executed

//note you can run thi application using 'node 1-intro' instead of 'node 1-intro.js' 
//that's what a module is :)

const filename= __filename

console.log(filename)

setInterval(() => {
    console.log('ciao!')
}, 1000) //set an interval in milliseconds to do an action

