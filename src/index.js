import express from 'express'
import connect from './config/database.js'

import bodyParser from 'body-parser'
import apiRoutes from './routes/index.js'
import {UserRepository, LikeRepository, TweetRepository} from './repository/index.js'
import LikeService from './services/likeService.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api',apiRoutes)

app.listen(3000, async () => {
    await connect()
    console.log('server started on port 3000 and database is connected')
     
    
    const tweetRepo = new TweetRepository()
    const tweets = await tweetRepo.getAll(0, 1)
    console.log(tweets)

    const likeServcie = new LikeService()
    const like = await likeServcie.toggleLike(tweets[0]._id,"Tweet",'66675a913a02af56b11d1238')
    
    console.log(like)


})