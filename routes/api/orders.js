const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//POST api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart)
//GET api/orders/cart
router.get('/cart', ordersCtrl.getCart)
// PUT api/orders/cart/qty
router.put('/cart/items/qty', ordersCtrl.setQuantity)
//POST api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout)
//GET apit/orders
router.get('/history', ordersCtrl.index)

module.exports = router;