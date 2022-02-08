const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

//POST api/orders/cart/items/:id
router.post('cart/items/:id', ordersCtrl.addToCart)

module.exports = router;