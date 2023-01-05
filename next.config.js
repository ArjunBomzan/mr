/** @type {import('next').NextConfig} */

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  const env = {
    DOMAIN_V1: "https://api.mindrisers.jobrisers.com/blog/api/v1/",
    DOMAIN: "https://api.mindrisers.jobrisers.com/"
  }
  const images = {
    domains: ["api.mindrisers.jobrisers.com"],
  }
  // next.config.js object
  return {
    env,
    images
  }
}