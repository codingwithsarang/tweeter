import {CommentRepository, TweetRepository} from '../repository/index.js'

class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository()
        this.tweetRepository = new TweetRepository()
    }

    async createComment(modelId, modelType, userId, content){
        try {
            if(modelType == 'Tweet'){
                var commentable = await this.tweetRepository.get(modelId)
            }else if(modelType == 'Comment'){
                var commentable = await this.commentRepository.get(modelId)
            }else{
                 
            }
            const comment = await this.commentRepository.create({
                content,
                userId,
                onModel: modelType,
                commentable: modelId,
                comment: []
            })
            commentable.comments.push(comment._id)
            await commentable.save()

            return comment
        } catch (error) {
            console.log(error)
        }
    }


}

export default CommentService