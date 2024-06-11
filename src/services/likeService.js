import {LikeRepository, TweetRepository} from '../repository/index.js'

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository()
        this.tweetRepository = new TweetRepository()
    }

    async toggleLike(modelId, modelType, userId ){
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId)
        }else if(modelType === 'Comment'){

        }else{
            throw new Error('Unknow modeltype')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeAble: modelId
        })
        console.log('exist',exists)
        if(exists){
            likeable.likes.pull(exists._id)
            await likeable.save()
            await this.likeRepository.destroy(exists._id)
            var isAdded = false
        }else{
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeAble: modelId
            })
            likeable.likes.push(newLike)
            await likeable.save()
            var isAdded = true
        }
        return isAdded
    }
}

export default LikeService