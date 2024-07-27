const express = require('express');
const { getItem, createItem, deleteItem, updateItem } = require('../controller/itemController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();


router.route('/')
.get(protect, getItem)
.post(protect, createItem);

router.route('/:id')
.put(protect, updateItem)
.delete(protect, deleteItem);


module.exports = router;