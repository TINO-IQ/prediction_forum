const pg = require('pg');
const dbPassword = require('../../config.js').dbPassword;
const port = process.env.PORT || 5432;

const connection =
  `postgres://postgres:${dbPassword}@localhost:5432/tino` ||
  `${process.env.DATABASE_URL}`;

const knex = require('knex')({
  client: 'pg',
  connection: connection
});

let bookshelf = require('bookshelf')(knex);

let User = bookshelf.Model.extend({
  tableName: 'users_test',
});

let Post = bookshelf.Model.extend({
  tableName: 'posts_test',
});

let Prediction = bookshelf.Model.extend({
  tableName: 'predictions_test'
})

let Content = bookshelf.Model.extend({
  tableName: "contents_test"
})

module.exports.knex = knex;
module.exports.User = User;
module.exports.Post = Post;
module.exports.Prediction = Prediction;
module.exports.Content = Content;
