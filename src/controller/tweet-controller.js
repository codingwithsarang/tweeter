import TweetService from "../services/tweetService.js";

const tweetService = new TweetService()


export const createTweet =async(req,res)=>{
    try {
        const response = await tweetService.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Successfully create a new tweet',
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}

export default {createTweet}