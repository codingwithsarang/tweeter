import User from '../model/user.js'
import CrudRepository from './crudRepository.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(User)
    }
}



export default UserRepository