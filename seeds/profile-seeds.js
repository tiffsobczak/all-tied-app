const { Profile } = require('../models');

//TODO 
const profiledata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '34',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cheatsheet.com%2Fwp-content%2Fuploads%2F2019%2F09%2FNBC-The-Office-1024x683.jpg&f=1&nofb=1'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password123'.
    bio: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '35',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Fuploads%2Fimage%2F2018%2F3%2F27%2Fc8ee553c-eae5-4efb-a3e9-ec3e4dffd2ff-screen-shot-2018-03-27-at-110806-am.png%3Fw%3D970%26h%3D582%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dformat%26q%3D70&f=1&nofb=1'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password123'.
    bio: 'Ipsum dolor sit amet,do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '21',
    shift: '3',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tvinsider.com%2Fwp-content%2Fuploads%2F2019%2F06%2FOFFICE-meltdown-gallery-michael-scott-no-1014x570.jpg&f=1&nofb=1'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'.
    bio: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tvinsider.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fthe-office-15-4-1014x570.jpg&f=1&nofb=1'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'password123'.
    bio: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.UI-6qlwOvkZMJXUx_3fvUQAAAA%26pid%3DApi&f=1'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'.
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '3',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages2.minutemediacdn.com%2Fimage%2Ffetch%2Fc_fill%2Cg_auto%2Cf_auto%2Ch_2377%2Cw_3000%2Fhttps%3A%252F%252Fnetflixlife.com%252Fwp-content%252Fuploads%252Fgetty-images%252F2017%252F12%252F892099904-premiere-of-warner-bros-pictures-father-figures-arrivals.jpg.jpg&f=1&nofb=1'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
    bio: 'Ut enim ad minim veniam, quis nostrud. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg3.looper.com%2Fimg%2Fgallery%2Fthe-office-reunion-what-every-cast-member-has-to-say-about-it%2Fwhat-ellie-kemper-thinks-about-getting-the-office-gang-back-together-1582644556.jpg&f=1&nofb=1'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'.
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTI4OTk0NDExMzA3NjQ5MDM0%2Fbrian-baumgartner-wikicommons_600x487jpg.jpg&f=1&nofb=1'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'.
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '1',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.blallywood.com%2Fwp-content%2Fuploads%2F2013%2F01%2Fblack-actors-craig-robinson-the-office.png&f=1&nofb=1'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'.
    bio: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    age: '61',
    shift: '2',
    contact: '@alesmonde',
    imageurl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.fanpop.com%2Fimages%2Fimage_uploads%2FKelly-the-office--28us-29-34538_751_1024.jpg&f=1&nofb=1'
  },
];

const seedProfiles = () => Profile.bulkCreate(profiledata);

module.exports = seedProfiles;
