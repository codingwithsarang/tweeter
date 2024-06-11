import LikeService from '../services/likeService.js'

const likeService = new LikeService()

export const toggleLike = async(req,res)=>{
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId)
        return res.status(200).json({
            success: true,
            data: response,
            error: {},
            message: 'Action Completed '
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: {},
            error: error,
            message: 'something went wrong'
        })
    }
}