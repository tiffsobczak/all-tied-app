const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Profile extends Model {
    checkPasword(loginPw){
        return bcrypt.compareSync(loginPw, this.password)
    }
}

// adding the user + profile fields

Profile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [20, 2000]
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 18,
            }
        },
        shift: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: false
        }

        
    },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newProfileData) {
            newProfileData.password = await bcrypt.hash(newProfileData.password, 10);
            return newProfileData;
          },
    
          async beforeUpdate(updatedProfileData) {
            updatedProfileData.password = await bcrypt.hash(updatedProfileData.password, 10);
            return updatedProfileData;
          }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profile'
      }
);

module.exports = Profile;