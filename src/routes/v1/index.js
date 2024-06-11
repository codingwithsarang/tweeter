import express from 'express'
import {  createTweet } from '../../controller/tweet-controller.js'
import { toggleLike } from '../../controller/like-controller.js'


const router = express.Router()

router.post('/tweet',createTweet)
router.post('/like/toggle',toggleLike)

export default router