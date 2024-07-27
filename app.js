const express = require('express');
const mongoose = require('mongoose');
 const authRoutes = require('./routes/authRoutes');
 const itemRoutes = require('./routes/itemRoutes');
 const  { errorHandler } = require('./middlewares/errorHandler');
 require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;
 

app.use(express.json());

 app.use('/api/auth', authRoutes);
 app.use('/api/item', itemRoutes);

 app.use(errorHandler);


mongoose.connect("mongodb+srv://manik:traversia123@myapp.rgpo9ja.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Server listening at port ${port}`)
    });
})
.catch((err)=>{
    console.error(err);
})