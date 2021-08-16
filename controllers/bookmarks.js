const express = require('express')
const bookmarkRoute = express.Router()

const Bookmark = require('../models/bookmarks')


// INDEX
/*
curl 'http://localhost:3003/bookmark'
*/
bookmarkRoute.get('/', (req, res) => {
    Bookmark.find({}, (err, foundBookmark) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.status(200).json(foundBookmark)
    })
})

// CREATE
/*
curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"url":"duckduckgo.com"}' \
    'http://localhost:3003/bookmark'
*/
bookmarkRoute.post('/', (req, res) => {
    Bookmark.create(req.body, (err, createdBookmark) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.status(200).json(createdBookmark)
    })
})

module.exports = bookmark