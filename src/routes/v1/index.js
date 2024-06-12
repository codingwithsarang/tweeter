import express from 'express'
import {  createTweet, get } from '../../controller/tweet-controller.js'
import { toggleLike } from '../../controller/like-controller.js'
import { createComment } from '../../controller/comment-controller.js'

const router = express.Router()

router.post('/tweet',createTweet)

router.post('/like/toggle',toggleLike)

router.post('/comment',createComment)

router.get('/tweet/:id',get)
export default router