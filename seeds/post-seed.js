const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content :'Lorem Ispum',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content :'Lorem Ispum',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut.',
     content :'Lorem Ispum',
    user_id: 3
  }   
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
