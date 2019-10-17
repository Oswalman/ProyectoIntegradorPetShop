const lostPetCtrl = {};
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const lostPet1= require('../models/lostPet');

lostPetCtrl.getlostPet = async (req, res) => {
    const lostPet=await lostPet1.find();
    res.json(lostPet);
};
lostPetCtrl.uploadLost = async (req, res) => {
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
    Direccion: req.body.Direccion,
    Nom_Pet: req.body.Nom_Pet,
    Description: req.body.Description,
    foto_pet:foto_pet.name,
    Lat:req.body.Lat,
    Lng:req.body.Lng
  }
  console.log(data)

  lostPet1.create(data).then(lospet => {
   
    console.log("Registró")
  }).catch(err => {
    console.log("Error al crear")
  res.send('error: ' + err)
})

};
lostPetCtrl.getlostPetOne = async (req, res) => {
    const{Nom_User,Nom_Pet}=req.body;
lostPet1.findOne({
  Nom_User: Nom_User,
  Nom_Pet: Nom_Pet
})
  .then(lostPet => {
    if (lostPet) {
      if (Nom_User == lostPet.Nom_User && Nom_Pet == lostPet.Nom_Pet) {
        res.send({status})
        console.log(status)
        console.log("Mascota ya Registrada")
      } else {
        console.log("Mascota o Usuario no encontrados")
        res.json({ status: 1 })
      }
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

lostPetCtrl.createlostPet = async (req, res) => {
    const {Nom_User, Nom_Pet}= req.body;

    const lostPetData = {
        Nom_User: req.body.Nom_User,
        Direccion: req.body.Direccion,
        Nom_Pet: req.body.Nom_Pet,
        Descripcion: req.body.Descripcion,
             
      }

    lostPet1.findOne({
        Nom_User: Nom_User,
        Nom_Pet: Nom_Pet
      }) .then(lostPet => {
        if (!lostPet) {
          lostPet1.create(lostPetData).then(lostPet => {
            res.json({ status: 1 })
            console.log("Registró")
          })
              .catch(err => {
                  console.log("Error de backend")
                res.send('error: ' + err)
              })
        } else {
            console.log("Mascota ya registrada")
          res.json({ status: 2 })
        }
      })
      .catch(err => {
          console.log("Error backend al buscar mascota perdida en DB")
        res.send('error: ' + err)
      })
};

lostPetCtrl.deletelost = async (req, res) => {
    res.send("delete");
}

module.exports = lostPetCtrl;