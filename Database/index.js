const pg = require('pg');
const dbPassword = require('../config.js').dbPassword;
const port = process.env.PORT || 5432;

const connection =
  `postgres://postgres:${dbPassword}@localhost:5432/users` ||
  `${process.env.DATABASE_URL}`;

const knex = require('knex')({
  clientt: 'pg',
  connection: connection
});

let bookshelf = require('bookshelf')(knex);

let User = bookshelf.Model.extend({
  tableName: 'users',
});

let Post = bookshelf.Model.extend({
  tableName: 'posts',
});

module.exports.knex = knex;
module.exports.User = User;
module.exports.Post = Post;