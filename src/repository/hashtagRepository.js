import Hashtag from '../model/hashtag.js'

class HashtagRepository {


    async create(data){
        try {
            const hashtag  = await Hashtag.create(data)
            return hashtag
        } catch (error) {
            console.log(error)
        }
    }

    async bulkCreate(data){
        try {
            const tags = await Hashtag.insertMany(data)
            return tags
        } catch (error) {
            console.log(error)
        } 
    }

    async get(hashtagId){
        try {
            const hashtag = await Hashtag.findById(hashtagId)
            return hashtag
        } catch (error) {
            console.log(error)
        }
    }


    async destroy(hashtagId){
        try {
            const response = await hashtag.findByIdAndRemove(hashtagId)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async findByName(titleList){
        try {
            const tags = await Hashtag.find({
                title: titleList
            })
            return tags
        } catch (error) {
            console.log(error)
        }
    }

}

export default HashtagRepository