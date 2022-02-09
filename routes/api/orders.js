const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//POST api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart)
//GET api/orders/cart
router.get('/cart', ordersCtrl.getCart)
// PUT api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setQuantity)

module.exports = router;