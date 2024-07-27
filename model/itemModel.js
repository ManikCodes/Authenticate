const mongoose = require('mongoose');
 const itemSchema = new mongoose.Schema({

name:{
    type: 'string',
    required: true
},
description:{
    type: 'string'
},
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
}

 });
 const Item = mongoose.model('Item', itemSchema);

 module.exports = Item;
