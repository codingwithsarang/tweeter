import Tweet from '../model/tweet.js'

class TweetRepository {


    async create(data){
        try {
            const tweet  = await Tweet.create(data)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }


    async get(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async getWithComments(tweetId){
        try {
            const tweet = await Tweet.findById(tweetId).populate({path: 'comment'}).lean()
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async destroy(tweetId){
        try {
            const tweet = await Tweet.findByIdAndRemove(tweetId)
            return tweet
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(offset, limit){
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit)
            return tweets
        } catch (error) {
            console.log(error)
        }
    }
}

export default TweetRepository