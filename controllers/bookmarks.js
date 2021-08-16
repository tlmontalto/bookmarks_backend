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

// UPDATE
/*
curl -X PUT \
    -H "Content-Type: application/json" \
    -d '{"title":"Duck Duck Go"}' \
    'http://localhost:3003/bookmark/60c280d6ed29ffbd519bc29d'
*/
bookmarkRoute.put('/:id', (req, res) => {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBookmark) => {
        if (err) {
            res.status(400).json({ error: err })
        }
        res.status(200).json(updatedBookmark)
    })
})

// DELETE
/*
curl -X DELETE \
    'http://localhost:3003/bookmark/60c280d6ed29ffbd519bc29d'
*/
bookmarkRoute.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
        if (err) {
            res.status(400).json({ error: err})
        }
        res.status(200).json({'deleted_bookmark': deletedBookmark})
    })
})

module.exports = bookmarkRoute