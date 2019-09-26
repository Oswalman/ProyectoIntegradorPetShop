const userCtrl = {};

const User= require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users=await User.find();
    res.json(users);
};
userCtrl.getUser = async (req, res) => {
    const {CorreoCliente, ClaveCliente}=req.body;
    const user=await User.findOne(
        {
        CorreoCliente:CorreoCliente,
        ClaveCliente:ClaveCliente
    })
    console.log(req.params.CorreoCliente)
    console.log(user)
    res.json(user);
};


userCtrl.createUser = async (req, res) => {
    const {CorreoCliente, ClaveCliente, NombreCliente, DireccionCliente, SexoCliente, Mascota, TipoUsuario}= req.body;
    const newUser= new User({
        CorreoCliente: CorreoCliente,
        ClaveCliente: ClaveCliente,
        NombreCliente: NombreCliente,
        DireccionCliente: DireccionCliente,
        SexoCliente: SexoCliente,
        Mascota: Mascota,
        TipoUsuario: TipoUsuario
    })
    await newUser.save();
    console.log(newUser);
    res.json("Saved");
};

userCtrl.deleteUser = async (req, res) => {
    res.send("delete");
}

module.exports = userCtrl;