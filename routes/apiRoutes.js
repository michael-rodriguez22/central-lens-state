const router = require('express').Router();
const { createNote, removeNote } = require('../lib/notes');
const { notes } = require('../Data/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const note = createNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    res.json(removeNote(req.params.id, notes));
});

module.exports = router;