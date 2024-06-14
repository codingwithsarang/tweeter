import dotenv from 'dotenv'

dotenv.config()

export default {
    AWS_REGION: process.env.AWS_REGION,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    BUCKET_NAME: process.env.BUCKET_NAME
}