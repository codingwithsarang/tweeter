import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRespository = new TweetRepository()
        this.hashtagRespository = new HashtagRepository()
    }

    async create(data) {
        try {
            const content = data.content
            const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1))
            const tweet = await this.tweetRespository.create(data)
            let alreadyPresentTags = await this.hashtagRespository.findByName(tags)
            let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title)
            let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag))
            newTags = newTags.map((tag)=>{
                return {title: tag, tweets: [tweet._id]}
            })
            const res = await this.hashtagRespository.bulkCreate(newTags)
            alreadyPresentTags.forEach((tag)=>{
                tag.tweets.push(tweet._id)
                tag.save()
            })        
            const allHashtags = [...res,...alreadyPresentTags]

            allHashtags.map((tag)=>{
                tweet.hashtags.push(tag._id)
            })
            await tweet.save()
            return tweet
        } catch (error) {
            console.log(error)
        }

    }


}


export default TweetService