const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
    
})


app.post('/schifo', (req, res) =>{
    //res.sendFile(__dirname + '/login.html');
    res.status(200).send({msg:'done'})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})