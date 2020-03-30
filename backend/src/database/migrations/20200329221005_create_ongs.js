 
exports.up = function(knex) {
 return knex.schema.createTable('ongs', function (table){
      table.string('id').primary();
      table.string('nome', 100).notNullable();
      table.string('email', 100).notNullable();
      table.string('whatsapp', 12).notNullable();
      table.string('city', 100).notNullable();
      table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs')
};
