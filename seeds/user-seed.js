const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'D',
    email: 'test@test1.com',
    password: '123455'
  },
 
  {
    username: 'Todd',
    email: 'test@test2.com',
    password: '123456'
  },
 
  {
    username: 'Steve',
    email: 'test@test3.com',
    password: '123457'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
