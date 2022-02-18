const seedProfiles = require('./profile-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProfiles();
  console.log('--------------');

  process.exit(0);
};

seedAll();
