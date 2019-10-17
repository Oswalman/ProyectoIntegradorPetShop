const {Schema, model}= require('mongoose');

const StoreSchema=new Schema({
    title: String,
    img: String,
    Price: Number,
    Company: String,
    Info: String,
    inCart: Number,
    Count: Number,
    Total: Number

},
{
    timestamps:true
}
    
)


module.exports=model('Store',StoreSchema);