const adoptCtrl = {};
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const adopt= require('../models/adopt');

adoptCtrl.getAllAdopt = async (req, res) => {
    const lostPet=await adopt.find();
    res.json(lostPet);
};
adoptCtrl.createAdoptPet= async (req, res) => {
  const {foto_pet}=req.files;
  
 console.log(req.body);
  foto_pet.mv('../frontend/src/client/img/' + foto_pet.name , function(err) {
    if (err)
    console.log(err)

    console.log("imagen subio")
    res.send('File uploaded!');
  });
  const data={ 
    Nom_User: req.body.Nom_User,
    Telefono: req.body.Telefono,
    Direccion: req.body.Direccion,
    Nom_Pet: req.body.Nom_Pet,
    Description: req.body.Description,
    foto_pet:foto_pet.name,
  }
  console.log(data)

  adopt.create(data).then(lospet => {
   
    console.log("Registró")
  }).catch(err => {
    console.log("Error al crear")
  res.send('error: ' + err)
})

};
adoptCtrl.getAdoptOne = async (req, res) => {
    const{Nom_User,Nom_Pet}=req.body;
    adopt.findOne({
  Nom_User: Nom_User,
  Nom_Pet: Nom_Pet
})
  .then(adopt => {
    if (adopt) {
      res.send(adopt);
    } else {
      console.log("No existe")
      res.json({ status: 2 })
    }
  })
  .catch(err => {
      console.log("Error backend Registro de Mascota Perdida")
      console.log(err)
    res.send('error: ' + err)
  })
};

adoptCtrl.deletelAdopt = async (req, res) => {
    res.send("delete");
}

module.exports = adoptCtrl;