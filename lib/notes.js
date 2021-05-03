const path = require("path");
const fs = require('fs');
const { nanoid } = require('nanoid');

function createNote(body, notesArr) {
    body.id = nanoid();
    notesArr.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../Data/db.json'),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    return notesArr;
}

function removeNote(id, notesArr) {
    let result = notesArr.filter(element => element.id !== id);
    fs.writeFileSync(
        path.join(__dirname, '../Data/db.json'),
        JSON.stringify({notes: result}, null, 2)
    )
    return result;
}

module.exports = {
    createNote,
    removeNote
};