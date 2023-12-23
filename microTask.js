/*console.log("console.log 1")

process.nextTick( () => console.log("this is process.next 1") ) ;

console.log("console.log 2")
*/


Promise.resolve().then(()=> console.log("this is promise.reslove 1"))
(async()=>{
  await console.log("this is promise.reslove 3")
})()

process.nextTick( () => console.log("this is process.next 2"))