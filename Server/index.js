const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const pool = require('./database/db')


// pool.on('connect', () => {
//     console.log('connected to the db');
//   });


const AllRouter = require('./routes/allRouter')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/kk',(req,res)=>{
    return res.json({hii:'hello'})
})

app.use('/', AllRouter);



const port = process.env.PORT || 5000
app.listen(port, () => { console.log(`server is running on port ${port}`) })
