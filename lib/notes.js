const path = require("path");
const fs = require('fs');

function createNote(body, notesArr) {
    notesArr.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../Data/db.json'),
        JSON.stringify({notes: notesArr}, null, 2)
    );
    return notesArr;
}

module.exports = {
    createNote
};