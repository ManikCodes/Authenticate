const asyncHandler = require('express-async-handler');
const Item = require ('../model/itemModel');



const getItem = asyncHandler(async (req, res)=>{
const items = await Item.find({user: req.user._id });

res.json(items);
});


const createItem = asyncHandler(async (req, res)=>{
    const {name, description} = req.body;


    const item = new Item({
        name, 
        description,
        user: req.user._id
    
    });

     const createdItem =await item.save();
     res.status(201).json(createdItem);
});

const updateItem = asyncHandler(async (req, res)=>{
    const item = await Item.findById(req.params.id);

    if(item){
        item.name = req.body.name || item.name;
        item.description = req.body.description ||item.description;

        const updatedItem = await item.save();
        res.json(updatedItem);
    } else{
        res.status(404);
        throw new Error('Item not Found');
    }
});


const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id);

    if (item){
        await item.deleteOne();
        res.json({message: 'Item removed successfully'});

    } else {
        res.status(404);
        throw new Error('Item not Found');
    }
});
module.exports = { getItem, createItem, deleteItem, updateItem };