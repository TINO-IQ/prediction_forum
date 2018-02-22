// File needed if want to create tables in database through knex migrate.

/**
 * up This will generate all the tables in the database
 * @param {Promise} knex Helps execute SQL queries to create the tables
 * @param {Promise} Promise Ensures that all tables will be created
 * @return {Promise}
 */
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("users_test", function(table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("username");
      table.integer("upvotes");
      table.integer("downvotes");
      table.integer("correct");
      table.integer("incorrect");
    }), knex.schema.createTable("posts_test", function(table) {
      table.increments("id").primary();
      table.integer("user_id").index().references("id").inTable("users_test");
      table.integer("predictions_id").index().references("id").inTable("predictions_test");
      table.integer("content_id").index().references("id").inTable("contents_test");
      table.integer("upvotes");
      table.integer("downvotes");
      table.date("created_at");
    }), knex.schema.createTable("contents_test", function(table) {
      table.increments("id").primary();
      table.string("content");
    }), knex.schema.createTable("predictions_test", function(table) {
      table.increments("id").primary();
      table.string("ticker");
      table.string("company");
      table.integer("window");
      table.integer("upvotes");
      table.integer("downvotes");
      table.float("actual_price");
      table.float("tino_price");
      table.boolean("tino_pass_fail");
      table.date("start_date");
      table.date("end_date");
    })]);
};

/**
 * @param {Promise} knex Helps execute SQL queries
 * @param {Promise} Promise Was not needed
 * @return {Promise} Will drop all the tables if you need to rollback a migration
 */
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users_test")
    .dropTableIfExists("posts_test")
    .dropTableIfExists("contents_test")
    .dropTableIfExists("predictions_test");
};
