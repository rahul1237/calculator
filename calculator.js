const express = require('express')
const bodyparser= require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended: true}))

app.get('/',function (req,res) {

        res.sendFile(__dirname+'/index.html')
})
app.post('/',function(req,res){
    n1=(req.body.n1)
    n2=(req.body.n2)
    b=n1+n2
    res.send(b)
    // res.send((req.body.n1)+(req.body.n2))
})
app.listen(7000,function () {
    console.log('port number 7000');
})

