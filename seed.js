require('dotenv').config();
require('./config/database');


const Item = require('./models/item');

(async function() {



  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Adventurine StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail: 'https://i.imgur.com/AqvNVrF.jpg',
    img_url_detail_extra:''},
    {name: 'Cobalt Blue Bibb',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 40,
    img_url_list: 'https://i.imgur.com/CC5ObFQ.png',
    img_url_detail: 'https://i.imgur.com/rdUAr8C.jpg',
    img_url_detail_extra:''},
    {name: 'Green Moss Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/m9I0HRi.png',
    img_url_detail: 'https://i.imgur.com/n0CbYuE.jpg',
    img_url_detail_extra:''},
    {name: 'Green Moss Collar', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/ZdJ3PCl.png',
    img_url_detail: 'https://i.imgur.com/pwA5mG9.jpg',
    img_url_detail_extra:''},
    {name: 'Red Adventurine Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 45, 
    img_url_list: 'https://i.imgur.com/DzrA5qD.png',
    img_url_detail: 'https://i.imgur.com/xpd7Ur3.jpg',
    img_url_detail_extra:''},
    {name: 'Jade StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/ssQHtH0.png',
    img_url_detail: 'https://i.imgur.com/tAaGofR.jpg',
    img_url_detail_extra:''},
    {name: 'Lapiz Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/R8MS3l7.png',
    img_url_detail: 'https://i.imgur.com/7BTzz08.jpg',
    img_url_detail_extra:''},
    {name: 'Zebra Jasper StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/2BUoE7Z.png',
    img_url_detail: 'https://i.imgur.com/XBiVNZK.jpg',
    img_url_detail_extra:''},
    {name: 'Red Adverturine Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 40, 
    img_url_list: 'https://i.imgur.com/mreDfbI.png',
    img_url_detail: 'https://i.imgur.com/WjlR4Ak.jpg',
    img_url_detail_extra:''},
    {name: 'Pearl Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 35, 
    img_url_list: 'https://i.imgur.com/Fy1PSkj.png',
    img_url_detail: 'https://i.imgur.com/Zo7GTj9.jpg',
    img_url_detail_extra:''},
    {name: 'New Jade Necklace', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/2n3crnm.png',
    img_url_detail: 'https://i.imgur.com/zUNDa6N.jpg',
    img_url_detail_extra:''},
    {name: 'Bronze Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/QI8ELli.png',
    img_url_detail: 'https://i.imgur.com/M9X8kIQ.jpg',
    img_url_detail_extra:''},
  ]);

 

  process.exit();

})();
