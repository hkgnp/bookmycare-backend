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
  return db.createTable('bookings', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
      unsigned: true,
    },
    booking_date: { type: 'datetime' },
    required_weeks: { type: 'int' },
    payment_date: { type: 'date' },
    payment_type: { type: 'string', length: 10 },
    payment_status: { type: 'string', length: 30 },
  });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  version: 1,
};
