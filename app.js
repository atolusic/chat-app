const app = new (require('koa'))()
const server = require('http').createServer(app.callback())

require('./socketManager')(server)

module.exports = server

