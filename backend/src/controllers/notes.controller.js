const notesCtrl = {};




notesCtrl.getNotes = async (req, res) => {
   
    res.send("getpost");
};

notesCtrl.createNote = async (req, res) => {
    res.send("crepost");
};

notesCtrl.getNote = async (req, res) => {
    res.send("getonepost");
}

notesCtrl.deleteNote = async (req, res) => {
    res.send("depost");
}

notesCtrl.updateNote = async (req, res) => {
   
    res.json('Note Updated');
}

module.exports = notesCtrl;