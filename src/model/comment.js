import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Tweet','Comment']
    },
    commentAble: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    }
}, { timestamps: true})

const Comment = mongoose.model('Comment',commentSchema)

export default Comment