import Like from "../model/like.js";
import CrudRepository from "./crudRepository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like)
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data).exec()
            return like
        } catch (error) {
            throw error
        }
    }

}

export default LikeRepository