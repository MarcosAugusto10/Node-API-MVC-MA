const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    age:{
        type:Number,
        required:true
    },
    lastname:
    {
        type:String,
        required:false
    }

});

module.exports = mongoose.model('User', userSchema);