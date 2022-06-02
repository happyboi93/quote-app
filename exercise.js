// const names = require('./4-names')
// const sayHi = require('./5-utils')
// sayHi(names.name)

// const os = require('os')
// // 
// const user = os.userInfo()
// console.log(user)
// 
// console.log(`The system uptime is ${os.uptime()}`)
// 
// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOs)

// const path = require('path');

// console.log(path.sep)

// const filePath = path.join('/content','subfolder','test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)

// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/subfolder/first.txt','utf-8')
// const second = readFileSync('./content/subfolder/second.txt','utf-8')

// const result = writeFileSync('./content/subfolder/result-sync.txt',
//     `Here is the result: ${first}, ${second}`,
//     {flag:'a'}
//     )

// const { readFile, writeFile} = require('fs')

// readFile('./content/subfolder/first.txt','utf-8', (err, result)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
// const first = result
// readFile('./content/subfolder/result-async.txt','utf-8',(err,result)=>{
//     if(err) {
//         console.log(err)
//         return
//     }
// const second = result
// writeFile('./content/subfolder/result-async.txt',
//     `The result is : ${first}, ${second}`, (err,result)=>{
//         if(err) {
//             console.log(err)
//             return
//         } 
//     })
//     })
// })

const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find he page you are looking for</p>
    <a href='/'>Go back home</a>
    `)
})

server.listen(5000)