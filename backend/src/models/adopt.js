const {Schema, model}= require('mongoose');

const AdoptPetSchema=new Schema({
    CorreoCliente: String,
    Nom_User: String,
    Direccion: String,
    Nom_pet:String,
    Telefono: String,
    Description: String,
    foto_pet: String,
},
    {
    timestamps:true
}
    
)

module.exports=model('adoptPet',AdoptPetSchema);