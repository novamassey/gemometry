require('dotenv').config();
require('./config/database');


const Item = require('./models/item');

(async function() {



  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Moss Green Colar', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/Cr9OFwU.jpg',
    img_url_detail_extra:''},
    {name: 'Lime Green Bibb',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30,
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/szAQqgh.jpg',
    img_url_detail_extra:''},
    {name: 'Coral Star Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/6P3q8o4.jpg',
    img_url_detail_extra:''},
    {name: 'Sea Green StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/ZPh11c7.jpg',
    img_url_detail_extra:''},
    {name: 'Coral Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/XQANxca.jpg',
    img_url_detail_extra:''},
    {name: 'Turquoise Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/3K6E8l1.jpg',
    img_url_detail_extra:''},
    {name: 'Lime Green Starburst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/3K6E8l1.jpg',
    img_url_detail_extra:''},
  ]);

  console.log(items)

  process.exit();

})();
