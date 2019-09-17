const userCtrl = {};



userCtrl.getUsers = async (req, res) => {
    res.send("usuarios");
};

userCtrl.createUser = async (req, res) => {
    res.send("create");
};

userCtrl.deleteUser = async (req, res) => {
    res.send("delete");
}

module.exports = userCtrl;