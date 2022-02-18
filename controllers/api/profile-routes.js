const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote } = require('../../models');

// get all users
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
    ],
  })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
    ],
    
  })
    .then(dbProfileData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No profile found with this id' });
        return;
      }
      res.json(dbProfileData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//TO DO: CREATE PROFILE
// router.post('/', (req, res) => {
  
// });

//TODO UPDATE PROFILE
//router.put('/:id', (req, res) => {});

//TO DO DELETE PROFILE
//router.delete('/:id', (req, res) => {});

module.exports = router;