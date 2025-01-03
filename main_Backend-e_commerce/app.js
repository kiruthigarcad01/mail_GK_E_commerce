const express = require('express');
const app = express();
require('dotenv').config();
const authRoutes = require('./router/authRoutes');
const adminRoutes = require('./router/adminRoutes');
const customerRoutes = require('./router/customerRoutes');
const multer = require('multer');
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 



app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/customers', customerRoutes);


app.use(express.static(path.join(__dirname, 'images'))); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


