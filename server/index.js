'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

const path = require('path')
const uuid = require('uuid')

// Serve the client from public folder
app.use(express.static(path.join(__dirname, '..', 'public')))
server.listen(3000)

// Start listening for incoming connections!
io.on('connection', socket => {

  socket.on('message', message => {
    message.id = uuid.v4()

    io.emit('message', message)
  })

  socket.once('disconnect', () => {
    // Say goodbye!
  })
})
