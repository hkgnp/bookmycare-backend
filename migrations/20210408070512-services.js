'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable('services', {
    id: { type: 'int', unsigned: true, primaryKey: true, autoIncrement: true },
    name: { type: 'string', length: 300 },
    subsidies: { type: 'boolean' },
    cost: { type: 'int' },
    description: { type: 'string', length: 500 },
    address: { type: 'string', length: 100 },
    postal_code: { type: 'string', length: 6 },
    religion: { type: 'string', length: 45 },
    halal: { type: 'boolean' },
  });
};

exports.down = function (db) {
  return db.dropTable('services');
};

exports._meta = {
  version: 1,
};
