const StoreCtrl = {};
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Store= require('../models/Store');

StoreCtrl.getAllStore = async (req, res) => {
    const store=await Store.find();
    res.json(store);
};

StoreCtrl.createStore = async (req, res) => {
    const {img}=req.files;
  
 
  img.mv('../frontend/src/client/img/' +  img.name , function(err) {
        if (err)
        console.log(err)
        res.send('File uploaded!');
    });
  const data={ 
    title: req.body.title,
    img: img.name,
    Price: req.body.Price,
    Company: req.body.Company,
    Info: req.body.Info,
    inCart:req.body.inCart,
    Count:req.body.Count,
    Total:req.body.Total
  }
  console.log(data)
  lostPet1.create(data)
  .then(store => {
    console.log("Registró")
  }).catch(err => {
    console.log("Error al crear")
  res.send('error: ' + err)
})}