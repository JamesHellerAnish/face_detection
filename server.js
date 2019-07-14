const express = require('express')
const spawn = require('child_process').spawn
app = express()
app.use('/',express.static(__dirname))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/add_face',async (req,res)=>{
    name = req.query.name
    const process = spawn('python',[__dirname+'/face_data_collect.py',name])
    process.stdout.on('data',(data)=>{
        res.send(data.toString())
    })
})
app.get('/detect_face',async (req,res)=>{
    const process = spawn('python',[__dirname+'/face_recognition.py'])
    process.stdout.on('data',(data)=>{
        res.send(data.toString())
    })
})

app.listen(8161,()=>{
    console.log('Server started at http://localhost:8161')
})