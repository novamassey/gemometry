require('dotenv').config();
require('./config/database');


const Item = require('./models/item');

(async function() {



  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Green Aventurine Starburst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/AqvNVrF.jpg',
    img_url_detail_extra:''},
    {name: 'Cobalt Blue Bibb',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 40,
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/rdUAr8C.jpg',
    img_url_detail_extra:''},
    {name: 'Green Moss Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/n0CbYuE.jpg',
    img_url_detail_extra:''},
    {name: 'Green Moss Collar', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/pwA5mG9.jpg',
    img_url_detail_extra:''},
    {name: 'Red Adventurine Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 45, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/xpd7Ur3.jpg',
    img_url_detail_extra:''},
    {name: 'Magnesite Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/JEdrjw6.jpg',
    img_url_detail_extra:''},
  ]);

 

  process.exit();

})();
