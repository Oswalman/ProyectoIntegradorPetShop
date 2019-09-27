const {Schema, model}= require('mongoose');

const userSchema=new Schema({
    //idCliente: {type: Number, required:true, unique: true, trim: true},
    CorreoCliente: {type: String, unique: true, trim: true, required: true},
    ClaveCliente: {type: String, required: true},
    NombreCliente: String,
    DireccionCliente: String,
    SexoCliente: String,
    Mascota: Number,
    TipoUsuario: Number

},
{
    timestamps:true
}
    
)

module.exports=model('User',userSchema);