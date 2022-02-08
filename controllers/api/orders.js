const Order = require('../../models/order');

module.exports = {
    addToCart,
    getCart
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addItemToCart(req.params.id)
    res.json(cart);
}

async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}