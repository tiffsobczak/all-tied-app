const router = require('express').Router();
const sequelize=require('../config/connection');
const {Profile}= require('../models');

router.get('/', (req, res) => {
    Profile.findAll({
      attributes: [
        'id',
      ],
      
    })
      .then(dbProfileData => {
        const profiles = dbProfileData.map(post => post.get({ plain: true }));
        // pass a single post object into the homepage template
        res.render('homepage', {profiles});
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req,res)=>{
  res.render('login');
});

module.exports = router;