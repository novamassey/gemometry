const Order = require('../../models/order');

module.exports = {
  addToCart,
  getCart,
  setQuantity,
  checkout,
  index
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

async function setQuantity(req, res){
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty)
  res.json(cart);
}

async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

async function index(req, res) {
  const orders = await Order.find({user :req.user._id, isPaid : true});
  res.json(orders);
}