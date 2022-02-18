const { Profile } = require('../models');

//TODO 
const profiledata = [
  {
    
  },
  {
    
  },
  {
    
  },
  
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;
