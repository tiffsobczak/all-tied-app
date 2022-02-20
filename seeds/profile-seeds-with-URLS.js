const { Profile } = require('../models');

const profiledata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '34',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/owxexv'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123',
    bio: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '35',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/pzjnst'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123',
    bio: 'Ipsum dolor sit amet,do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '21',
    shift: '3',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/oa1o1b'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123',
    bio: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/doivgq'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123',
    bio: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/kw8xhm'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '3',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/qaklfn'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123',
    bio: 'Ut enim ad minim veniam, quis nostrud. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/paagk5'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/mokeqg'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/4mdji7'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123',
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://rb.gy/jzh2lb'
  }
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;
