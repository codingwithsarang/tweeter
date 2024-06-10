const express = require('express')
const connect = require('./config/database')

const app = express()



app.listen(3000,async()=>{
    await connect()
    console.log('server started on port 3000 and database is connected')

})