const express = require('express')
const connect = require('./config/database')
// const { TweetRepository } = require('./repository
const TweetService = require('./services/tweetService')

const app = express()



app.listen(3000, async () => {
    await connect()
    console.log('server started on port 3000 and database is connected')
    const tweetService = new TweetService()
    // const data = await tweetService.create({content: '#happy #travel #somethingGood'})
    // console.log(data)
})