module.exports = function (server) {
  const io = require('socket.io')(server)

  io.on('connection', (socket) => {
    socket.on('NEW_MESSAGE', function (payload) {
      socket.emit('SE_SUBSCRIBE_CONVERSATION', { payload })
    })
  })
}