const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    hastags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
},{timestamps: true})


const Tweet = mongoose.model('Tweet',tweetSchema)

module.exports = Tweet