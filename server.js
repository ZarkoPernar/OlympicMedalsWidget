const express = require('express')
const app = express()

app.use(express.static('build'))

app.listen(proccess.env.PORT || 3000)
