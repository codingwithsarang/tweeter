import express from 'express'
import connect from './config/database.js'

import TweetService from './services/tweetService.js'



const app = express()



app.listen(3000, async () => {
    await connect()
    console.log('server started on port 3000 and database is connected')
    const repo = new TweetService()
    const data = await repo.create({content: 'i am #CODING #js'})
})