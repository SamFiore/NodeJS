const EventEmitter =require('events')

const customEmitter = new EventEmitter()

customEmitter.on('x',(data,secondData)=>{
    console.log('received')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('x','Hola mundo',[1,2,3,4])
// customEmitter.emit('x',12)
// customEmitter.emit('x',[21,98,23,52])
// customEmitter.emit('x',{name:'Adolfo'})
