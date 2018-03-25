const { knex } = require("../database/index.js")

/** retrieves specific prediction's info
 *  - stock prediction (blurred if open, unblurred if closed)
    - open, closed status
    - time until end
    - all the posts
 * @returns {Object} stock prediction and all its contents
 */
const getPredictionInfo = (predictionId) => {
    // returns json 
    
    const predictionInfo = await table.Prediction.forge()
      .where("id", "=", predictionId)
      .query()
      .select()

    const contents = await table.Post.forge()
        .where("predictions_id", "=", predictionId)
        .query()
        .select()
    
    return {
        prediction : predictionInfo,
        contents: contents
    }

}

module.exports = {
    getPredictionInfo
}