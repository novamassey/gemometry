//File to allow for testing in developement in the shell
// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
// const Order = require('./models/order');

// Local variables 
let user, item, order;
let users, items, orders;