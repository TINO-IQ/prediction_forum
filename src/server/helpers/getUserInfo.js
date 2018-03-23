const { knex } = require("../../database/index.js")
const { User } = require("../../database/index.js")

/** retrieves specific user's info for profile page
 * @returns {Object} user info
 */
const getUserInfo = (userId) => {
    // query database for user info

    // returns user info

}

module.exports = {
    getUserInfo
}