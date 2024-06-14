import multer from "multer";
import multerS3 from 'multer-s3'
import aws from 'aws-sdk'

import {AWS_REGION, S3_ACCESS_KEY, BUCKET_NAME} from './server-config.js'

aws.config.update({
    region: AWS_REGION,
    secretAccessKey: S3_SECRET_ACCESS_KEY,
    accessKeyId: S3_ACCESS_KEY
})

const s3 = new aws.S3()

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: BUCKET_NAME,
        acl: 'pulic-read',
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.fieldname})
        },
        key: function (req, file, cb){
            cb(null, Date.now().toString())
        }
    })
})