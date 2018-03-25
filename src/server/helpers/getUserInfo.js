const table = require("../database/index.js");

/** retrieves specific user's info for profile page
 * @returns {Object} user info
 */
const getUserInfo = (googleId) => {    
    // returns user info
    return table.User.forge()
      .where("googleid", "=", googleId)
      .query()
      .select()
}

module.exports = {
    getUserInfo
}