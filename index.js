process.env.UV_THREADPOOL_SIZE = 1
const cluster = require ('cluster')
const crypto = require ('crypto')

//Is the file being executed in master mode?

if(cluster.isMaster){
  //Cause index.js to be executed  again but in slave(child) mode
  cluster.fork()
  cluster.fork()
  //cluster.fork()
  //cluster.fork()
}
else{


const express = require ('express')

const app = express()

const Port = process.env.PORT ||3000

app.get('/', (req, res)=>{
  crypto.pbkdf2('a','b',100000,512,'sha512',()=>{


    res.send('Hi there')
    })



})

app.get('/fast', (req, res)=>{

  res.send('this was fast')
})

app.listen(Port,()=>{
  console.log(`listening on ${Port}`)
})
}
