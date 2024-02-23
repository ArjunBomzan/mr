/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration

// module.exports = (phase) => {
//   const env = {
//     DOMAIN_V1: "https://mindrisers.com.np/blog/api/v1/",
//     DOMAIN: "https://mindrisers.com.np/"
//   }
//   const images = {
//     domains: ["mindrisers.com.np"],
//   }
//   // next.config.js object
//   return {
//     env,
//     images
//   }
// }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const env = {
  DOMAIN_V1: "https://mindrisers.com.np/blog/api/v1/",
  DOMAIN: "https://mindrisers.com.np/"
}
const images = {
  domains: ["mindrisers.com.np","picsum.photos","192.168.1.4"],
  unoptimized:true

}

module.exports = withBundleAnalyzer({
  env, images
})