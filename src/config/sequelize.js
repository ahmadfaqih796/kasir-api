const sequelize = require('./database');
const { DB_SYNC } = process.env;

module.exports = async (app) => {
  app.set('sequelizeClient', sequelize);

  try {
    if (DB_SYNC === 'true') {
      await sequelize.sync();
      console.log('Database synced');
    } else {
      await sequelize.authenticate();
      console.log('Database connected');
    }
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
