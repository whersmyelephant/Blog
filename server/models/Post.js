//Prérequis
const mongoose = require ('mongoose');

//Schéma des posts sur le blog
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: { 
    type: String,
    required: true
    },
    createAt: {
       type: Date,
       default: Date.now
    },
    updatedAt: {
       type: Date,
       default: Date.now 
    }

});

//Exporter le module 
module.exports = mongoose.model('Post', PostSchema)