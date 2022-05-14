let config = {
  server: {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000
  },
  jwtToken: {
    key: process.env.JWT_TOKEN || 'SuperSecretToken'
  }
}

config.db = process.env.PRODUCTION
  ? 'vue-blog'
  : `http://${config.server.host}:5984/vue-blog`

module.exports = config
