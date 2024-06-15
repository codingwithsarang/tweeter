import express from 'express'
import {  createTweet, get } from '../../controller/tweet-controller.js'
import { toggleLike } from '../../controller/like-controller.js'
import { createComment } from '../../controller/comment-controller.js'
import { login, signup } from '../../controller/user-controller.js'

import { authenticate } from '../../middlewares/authenticate.js'


const router = express.Router()

router.post('/tweet',createTweet)

router.post('/like/toggle',toggleLike)

router.post('/comment',authenticate,createComment)

router.get('/tweet/:id',get)

router.post('/signup',signup)

router.post('/login',login)
export default router