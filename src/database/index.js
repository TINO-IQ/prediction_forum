const pg = require('pg');
const pgCloudURL = require('../../config.js').pgCloudURL
const dbPassword = require('../../config.js').dbPassword;
const tinoURL = require('../../config.js').tinoURL;
const port = process.env.PORT || 5432;

const connection =
  tinoURL || `postgres://postgres:${dbPassword}@${pgCloudURL}:5432/tino` || `postgres://postgres:${dbPassword}@localhost:5432/tino` ||
  `${process.env.DATABASE_URL}`;

const knex = require('knex')({
  client: 'pg',
  connection: connection
})

let bookshelf = require('bookshelf')(knex);

let Prediction = bookshelf.Model.extend({
  tableName: "predictions",
  posts: () => {
    return this.hasMany(Post);
  }
})

let User = bookshelf.Model.extend({
  tableName: "users"
})

let Post = bookshelf.Model.extend({
  tableName: 'posts',
  prediction: () => {
    return this.belongsTo(Prediction);
  },
  content: () => {
    return this.hasOne(Content);
  }
})

let Content = bookshelf.Model.extend({
  tableName: "contents",
  post: () => {
    return this.belongsTo(Post);
  }
})

module.exports = {
  knex,
  User,
  Post,
  Prediction,
  Content,
}

