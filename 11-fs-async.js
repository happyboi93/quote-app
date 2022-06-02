const { readFile, writeFile } = require('fs')
console.log('start')
// Destructuring
const errorCheck = function (err) {
    if(err){
        console.log(err)
        return
    }
}
// Callback function
readFile('./content/first.txt','utf-8',(err,result)=>{
    errorCheck()
    const first = result;
readFile('./content/second.txt','utf-8',(err,result)=>{
    errorCheck()
    const second =result
    writeFile('./content/result-async.txt',
    `Here is the result : ${first},${second}`,
    (err,result)=>{
        errorCheck()
        console.log('donw with  this task')
    }
    )
    })
})
console.log('starting next task')