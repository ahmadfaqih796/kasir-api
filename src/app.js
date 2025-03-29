const express = require('express');
require('dotenv').config();

const configureDatabase = require('./config/sequelize');
const userRoutes = require('./module/user/user.routes');
const productRoutes = require('./module/product/product.routes');

const app = express();

app.use(express.json());

configureDatabase(app);


app.use('/users', userRoutes);
app.use('/products', productRoutes);

module.exports = app;
