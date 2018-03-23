/**  Queries PG database and retrieves all stock predictions from past 10 days
 * @returns {Object} predictions from past 10 days
 */

const { Post } = require('../../database/index.js');
const { knex } = require('../../database/index.js');

const getPredictions = () => {
    // query database for recent posts

    // return posts
    
}

module.exports = {
    getPredictions
}

