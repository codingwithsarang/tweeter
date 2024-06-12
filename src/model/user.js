import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{timestamps: true })


userSchema.pre('save',async function(next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9)
    const encryptedPassword = await bcrypt.hashSync(this.password, SALT)
    user.password = encryptedPassword
    next()
})


const User = mongoose.model('User',userSchema)

export default User

