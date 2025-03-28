const sequelize = require('./database');
const { DB_SYNC } = process.env;

module.exports = async (app) => {
  app.set('sequelizeClient', sequelize);

  try {
    // if (DB_SYNC === 'true') {
    //   // await sequelize.sync({ alter: true });
    //   // console.log('Database synced');
    // } else {
    // }
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (_) {
    // throw new Error('Database connection failed');
    // console.error('Database connection failed:', error);
  }
};
