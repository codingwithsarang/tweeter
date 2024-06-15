import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRespository = new TweetRepository()
        this.hashtagRespository = new HashtagRepository()

    }


    async #seprateExistingTags(tags,tweet) {
        try {
            let alreadyPresentTags = await this.hashtagRespository.findByName(tags)
            let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title)
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag))
            newTags = newTags.map((tag) => {
                return { title: tag, tweets: [tweet._id] }
            })
            await this.hashtagRespository.bulkCreate(newTags)
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet._id)
                tag.save()
            })
        } catch (error) {
            console.log(error)
        }
       
    }


    async create(data) {
        try {
            const content = data.content
            const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase())
            const tweet = await this.tweetRespository.create(data)
            await this.#seprateExistingTags(tags, tweet)
            console.log('in service :',data)
            return tweet
        } catch (error) { 
            console.log(error)
        }

    }

    async get(tweetId){
        try {
            const tweet = await this.tweetRespository.getWithComments(tweetId)
            return tweet
        } catch (error) {
            throw error
        }
    }

}


export default TweetService