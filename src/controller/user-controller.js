import UserService from "../services/userService.js";

const userService = new UserService()

export const signup  = async(req,res)=>{
    try {
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: 'Successfully created a new user'

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Faild to create new user'
        })
    }
}


export const login = async (req,res)=>{
    try {
        const token = await userService.signin(req.body)
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'Faild to create new user'
        })
    }
}