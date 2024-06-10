const { TweetRepository } = require("../repository/index");

class TweetService {
    constructor() {
        this.tweetRespository = new TweetRepository()
    }

    async creat(data) {
        try {
            const content = data.content
            let tags = content.match(/#[a-zA-Z0-9_]+/g)
            tags = tags.map((tag)=> tag.substring(1))
            return tags
        } catch (error) {
            console.log(error)
        }

    }


}


module.exports = TweetService