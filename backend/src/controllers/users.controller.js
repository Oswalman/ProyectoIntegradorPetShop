const userCtrl = {};
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User= require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users=await User.find();
    res.json(users);
};
userCtrl.getUser = async (req, res) => {
    
    const {CorreoCliente, ClaveCliente}=req.body;/*
    const user=await User.findOne(
        {
        CorreoCliente:CorreoCliente,
        ClaveCliente:ClaveCliente
    })*/


    User.findOne({
        CorreoCliente: CorreoCliente
      })
        .then(user => {
          if (user) {
            if (bcrypt.compareSync(ClaveCliente, user.ClaveCliente)) {
              // Passwords match
              const payload = {
                _id: user._id,
                NombreCliente: user.NombreCliente,
                CorreoCliente: user.CorreoCliente,
                DireccionCliente: user.DireccionCliente,
              }
              let status = jwt.sign(payload, "secret", {
                expiresIn: 1440
              })
              res.send({status})
              console.log(status)
            } else {
              // Passwords don't match
              console.log("Contraseña incorrecta")
              res.json({ status: 1 })
            }
          } else {
            console.log("No existe usuario")
            res.json({ status: 2 })
          }
        })
        .catch(err => {
            console.log("Error backend login")
            console.log(err)
          res.send('error: ' + err)
        })
};


userCtrl.createUser = async (req, res) => {
    const {CorreoCliente, ClaveCliente}= req.body;
    const userData = {
        CorreoCliente: req.body.CorreoCliente,
        ClaveCliente: req.body.ClaveCliente,
        NombreCliente: req.body.NombreCliente,
        DireccionCliente: req.body.DireccionCliente,
        SexoCliente: req.body.SexoCliente,
        Mascota: req.body.Mascota,
        TipoUsuario: req.body.TipoUsuario
        
      }
    User.findOne({
        CorreoCliente: CorreoCliente
      }) .then(user => {
        if (!user) {
          bcrypt.hash(ClaveCliente, 10, (err, hash) => {
            userData.ClaveCliente = hash
            console.log("hash")
            console.log(hash)
            console.log(userData)
            User.create(userData)
              .then(user => {
                res.json({ status: 1 })
                console.log("Registró")
              })
              .catch(err => {
                  console.log("Error de backend")
                res.send('error: ' + err)
              })
          })
        } else {
            console.log("Usuario ya existe")
          res.json({ status: 2 })
        }
      })
      .catch(err => {
          console.log("Error backend2")
        res.send('error: ' + err)
      })


/*
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
    res.json("Saved");*/
};

userCtrl.deleteUser = async (req, res) => {
    res.send("delete");
}

module.exports = userCtrl;