const table = require("../database/index.js")
const { getUserInfo } = require("./getUserInfo.js")
const context = table.knex;

/** adds new User to database
 * @returns success message
 */
const newUser = async (googleId, email, token, name, username) => {
    // check users table 
        // if user exists, don't create
        // else create new user and save
    const userObj = await getUserInfo(googleId);
    if (userObj === null || userObj.length < 1) {
        new table.User({
          googleId: googleId,
          username: username,
          email: email,
          name: name,
          token: token,
          upvotes: 0,
          downvotes: 0,
        })
          .save()
          .then(() => {
            context.destroy()
          })
    }

}

module.exports = {
    newUser
}