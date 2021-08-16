const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const APP = express()
const PORT = 3003

// MIDDLEWARE
APP.use(express.json())

APP.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})