const products = require('../products.json')

module.exports = {
  getAllProducts: (req, res) => {
    if(req.query.price){
      const items = products.filter(elem => elem.price > parseInt(req.query.price))
      return res.status(200).send(items)
    }
    res.status(200).send(products)
  },

  getProductById: (req, res) => {
    const item = products.find(elem => elem.id === parseInt(req.params.id))
    if(!item) {
      return res.status(500).send('Item not in List')
    }
    res.status(200).send(item)
  },
}