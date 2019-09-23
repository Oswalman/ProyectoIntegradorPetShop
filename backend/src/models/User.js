const {Schema, model}= require('mongoose');

const userSchema=new Schema({
    //idCliente: {type: Number, required:true, unique: true, trim: true},
    CorreoCliente: String,
    ClaveCliente: String,
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