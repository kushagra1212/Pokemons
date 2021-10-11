const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const nextConfig = {
  reactStrictMode: true,
  image:{
    domains:["https://raw.githubusercontent.com","localhost"]
  }
}


module.exports = withPlugins([[withImages]], nextConfig)