const Users =  require('./User')
const Products = require('./Products')
const Orders = require('./Orders.js')
module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders() 
}