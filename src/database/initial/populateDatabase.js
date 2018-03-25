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
      table.string("googleid");
      table.string("token");
      table.string("name");
      table.string("email");
      table.string("username");
      table.integer("upvotes");
      table.integer("downvotes");
    }), knex.schema.createTable("posts", function(table) {
      table.increments("id").primary();
      table.integer("user_id").index().references("id").inTable("users");
      table.integer("predictions_id").index().references("id").inTable("predictions");
      table.integer("content_id").index().references("id").inTable("contents");
      table.integer("upvotes");
      table.integer("downvotes");
      table.date("created_at");
    }), knex.schema.createTable("contents", function(table) {
      table.increments("id").primary();
      table.string("content");
    }), knex.schema.createTable("predictions", function(table) {
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
    .dropTableIfExists("users")
    .dropTableIfExists("posts")
    .dropTableIfExists("contents")
    .dropTableIfExists("predictions");
};
