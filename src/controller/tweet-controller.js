import TweetService from "../services/tweetService.js";

const tweetService = new TweetService()

import upload from '../config/file-upload-s3-config.js'



const singleUploader = upload.single('image')

export const createTweet =async(req,res)=>{
    try {
        singleUploader(req,res, async function (err, data){
            if(err){
                return res.status(500).json({
                    error: err
                })
            }
            const payload = req.body
            payload.image = req.file.location
            console.log(payload)
            const response = await tweetService.create(payload)

            return res.status(201).json({
                success: true,
                message: 'Successfully create a new tweet',
                data: response,
                err: {}
            })        })
       
    } catch (error) {
        return res.status(201).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}

export const get = async (req,res)=>{
    try {
        const response = await tweetService.get(req.params.id)
        console.log(response)
        return res.status(201).json({
            success: true,
            message: 'Successfully fetched a  tweet',
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

