const port = process.env.PORT || 7000
const app = require('./app')

app.listen(port, function () {
  console.log(`STARTED PORT=${port}`)
})