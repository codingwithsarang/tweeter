const mongoose = require('mongoose')

const connect = async()=>{
    await mongoose.connect('mongodb+srv://joshisarang196:BdkP1F7bOQlfUOgt@cluster0.joc3g19.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
}

module.exports = connect