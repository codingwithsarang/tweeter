import Tweet from '../model/tweet.js'
import CrudRepository from './crudRepository.js'

class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet)
    }

    async create(data){
        try {
            const tweet  = await Tweet.create(data)
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

   

    async getAll(offset, limit){
        try {
            const tweets = await Tweet.find().skip(offset).limit(limit)
            return tweets
        } catch (error) {
            console.log(error)
        }
    }

    async find(id){
        try {
            const response = await this.model.findById(id).populate({path: 'likes'})
            return response
        } catch (error) {
            console.log('something went wrong in crud repository')
            throw error
        }
    }
}

export default TweetRepository