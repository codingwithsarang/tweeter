import Comment from "../model/comment.js";
import CrudRepository from "./crudRepository.js";

class CommentRepository extends CrudRepository{
    constructor(){
        super(Comment)
    }
}

export default CommentRepository