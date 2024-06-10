const express = require('express')
const connect = require('./config/database')

const app = express()
const TweetRepository = require('./repository/tweetRepository')
const TweetService = require('./services/tweetService')
const Tweet = require('./model/tweet')



app.listen(3000,async()=>{
    await connect()
    console.log('server started on port 3000 and database is connected')

    const tweetRepository = new TweetRepository() 
    // const tweet = await tweetRepository.create({content: 'i wish i was 17 again'})
    // const tweet = await tweetRepository.get('6666c37d694052929c68b0aa')
    // console.log(tweet)

    // const tweetService = new TweetService()
    // const hashtags = await tweetService.creat({content: 'hii #family trip #enjoy #musti'})
    // console.log(hashtags)

    const tweets = await Tweet.find({
        content: ["today is a great day!","i wish i was 17 again",'random']
    })
    console.log(tweets)
})