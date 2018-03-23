const { knex } = require("../../database/index.js")
const { Stock } = require("../../database/index.js")

/** retrieves specific stock's info
 *  - stock prediction (blurred if open, unblurred if closed)
    - open, closed status
    - time until end
    - all the comments
 * @returns {Object} user info
 */
const getStockInfo = (stockId) => {
    
    
}

module.exports = {
    getStockInfo
}