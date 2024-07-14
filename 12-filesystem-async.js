//using read write methods of 'fs' ASYNCRONOUSLY
//so is NON BLOCKING
const {readFileSync, writeFileSync, write, readFile } = require('fs')

//provide the method with the path to the file to read, the encoding (fundamental otherwise the output will be numerical)
//then two variables error and result
readFile('./first.txt','utf8',(err,result)=>{
    if(err){
        //if there is an error we console.log it
        console.log(err)
        return
    }
    console.log(result)
})