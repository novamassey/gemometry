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
    img_url_detail: 'https://i.imgur.com/pG5urVR.png',
    img_url_detail_extra:'https://i.imgur.com/AqvNVrF.jpg'},
    {name: 'Cobalt Blue Bibb',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 40,
    img_url_list: 'https://i.imgur.com/CC5ObFQ.png',
    img_url_detail: 'https://i.imgur.com/CC5ObFQ.png',
    img_url_detail_extra:'https://i.imgur.com/rdUAr8C.jpg'},
    {name: 'Green Moss Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/m9I0HRi.png',
    img_url_detail: 'https://i.imgur.com/m9I0HRi.png',
    img_url_detail_extra:'https://i.imgur.com/n0CbYuE.jpg'},
    {name: 'Green Moss Collar', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/ZdJ3PCl.png',
    img_url_detail: 'https://i.imgur.com/ZdJ3PCl.png',
    img_url_detail_extra:'https://i.imgur.com/pwA5mG9.jpg'},
    {name: 'Red Adventurine Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 45, 
    img_url_list: 'https://i.imgur.com/DzrA5qD.png',
    img_url_detail: 'https://i.imgur.com/DzrA5qD.png',
    img_url_detail_extra:'https://i.imgur.com/xpd7Ur3.jpg'},
    {name: 'Jade StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/ssQHtH0.png',
    img_url_detail: 'https://i.imgur.com/ssQHtH0.png',
    img_url_detail_extra:'https://i.imgur.com/tAaGofR.jpg'},
    {name: 'Lapiz Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/R8MS3l7.png',
    img_url_detail: 'https://i.imgur.com/R8MS3l7.png',
    img_url_detail_extra:'https://i.imgur.com/7BTzz08.jpg'},
    {name: 'Zebra Jasper StarBurst', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/2BUoE7Z.png',
    img_url_detail: 'https://i.imgur.com/2BUoE7Z.png',
    img_url_detail_extra:'https://i.imgur.com/XBiVNZK.jpg'},
    {name: 'Red Adverturine Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 40, 
    img_url_list: 'https://i.imgur.com/mreDfbI.png',
    img_url_detail: 'https://i.imgur.com/mreDfbI.png',
    img_url_detail_extra:'https://i.imgur.com/WjlR4Ak.jpg'},
    {name: 'Pearl Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 35, 
    img_url_list: 'https://i.imgur.com/Fy1PSkj.png',
    img_url_detail: 'https://i.imgur.com/Fy1PSkj.png',
    img_url_detail_extra:'https://i.imgur.com/Zo7GTj9.jpg'},
    {name: 'New Jade Necklace', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 30, 
    img_url_list: 'https://i.imgur.com/2n3crnm.png',
    img_url_detail: 'https://i.imgur.com/2n3crnm.png',
    img_url_detail_extra:'https://i.imgur.com/zUNDa6N.jpg'},
    {name: 'Bronze Bibb', 
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nisi consequatur ab facilis modi ipsum, dolores dolorem repudiandae reiciendis unde magnam quo asperiores delectus corrupti repellat provident placeat, omnis error',  
    price: 50, 
    img_url_list: 'https://i.imgur.com/QI8ELli.png',
    img_url_detail: 'https://i.imgur.com/QI8ELli.png',
    img_url_detail_extra:'https://i.imgur.com/M9X8kIQ.jpg'},
  ]);

 

  process.exit();

})();
