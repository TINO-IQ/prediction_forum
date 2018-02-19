// File needed if want to create tables in database through knex migrate.

/**
 * up This will generate all the tables in the database
 * @param {Promise} knex Helps execute SQL queries to create the tables
 * @param {Promise} Promise Ensures that all tables will be created
 * @return {Promise}
 */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users", function(table) {
      table.increments("id").primary();
      table.string("name");
    }),
    knex.schema.createTable("posts", function(table) {
      table.increments("id").primary();
      table.string("username");
      table.string("content");
      table.timestamps();
    }),
  ]);
};

/**
 * @param {Promise} knex Helps execute SQL queries
 * @param {Promise} Promise Was not needed
 * @return {Promise} Will drop all the tables if you need to rollback a migration
 */
exports.down = function(knex, Promise) {
  return (
    knex.schema
      .dropTableIfExists("users")
      .dropTableIfExists("posts")
  );
};
