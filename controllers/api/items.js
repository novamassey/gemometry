const Item = require('../../models/item');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const items = await Item.find();
  res.json(items);
  // console.log(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  console.log(item)
    res.json(item);
  }