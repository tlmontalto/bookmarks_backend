const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const APP = express()
const PORT = 3003

// MIDDLEWARE
APP.use(express.json())

// MONGODB
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j1xpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

APP.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})