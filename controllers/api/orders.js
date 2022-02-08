const Order = require('../../models/order');

module.exports = {
    addToCart,
}

async function addToCart(req, res) {
    const cart = await Order.getCar(req.user._id);
    res.json(cart);

}