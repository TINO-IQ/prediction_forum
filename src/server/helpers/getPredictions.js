const table = require("../database/index.js")

/**  Queries PG database and retrieves all stock predictions from past 10 days
 * @returns {Object} predictions from past 10 days
 */
const getPredictions = () => {
    // return stock predictions from past 10 days
    const start_date = null;
    const end_date = null;
    
    return table.Prediction.forge()
      .where("id", "=", userId)
      .query()
      .select()
    
}

module.exports = {
    getPredictions
}

