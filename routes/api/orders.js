const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//POST api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart)
//GET api/orders
router.get('/cart', ordersCtrl.getCart)
// //POST api/orders/new?

module.exports = router;