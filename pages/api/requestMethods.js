import axios from 'axios'
export const publicRequest = axios.create({
    baseURL: "https://api.mindrisers.jobrisers.com/blog/api/v1/",
    // baseURL: process.env.DB_DOMAIN_V1,
})
