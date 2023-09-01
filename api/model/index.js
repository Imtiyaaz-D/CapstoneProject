const Users =  require('./User')
const Products = require('./Products')
const Orders = require('./Orders')
module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders() 
}