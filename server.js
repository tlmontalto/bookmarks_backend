const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const APP = express()
const PORT = 3003

// MIDDLEWARE
APP.use(express.json())

// MONGODB
const CONNECTION_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j1xpf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

// configure my cors middleware for other requests
const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// APP.use(cors(corsOptions))

// CONTROLLERS
const bookmarkController = require('./controllers/bookmarks')
APP.use('/bookmark', bookmarkController)

APP.get('/', (req, res) => {
    res.redirect('/bookmark')
})

APP.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})