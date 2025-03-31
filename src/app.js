const express = require('express');
const swaggerUi = require("swagger-ui-express");
const specs = require("./docs/swaggerDef");
require('dotenv').config();

const configureDatabase = require('./config/sequelize');

const authRoutes = require('./module/auth/auth.routes');
const userRoutes = require('./module/user/user.routes');
const productRoutes = require('./module/product/product.routes');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

configureDatabase(app);


app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/auth', authRoutes);

module.exports = app;
