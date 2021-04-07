const bookshelf = require('../bookshelf');

const Service = bookshelf.model('Service', {
  tableName: 'services',

  org() {
    return this.belongsTo('Organisation');
  },

  slots() {
    return this.hasMany('Slot');
  },
});

const Organisation = bookshelf.model('Organisation', {
  tableName: 'organisations',

  services() {
    return this.hasMany('Service');
  },
});

const ServiceType = bookshelf.model('ServiceType', {
  tableName: 'service_types',
});

const Slot = bookshelf.model('Slot', {
  tableName: 'slots',

  service() {
    return this.belongsTo('Service');
  },

  booking() {
    return this.belongsTo('Booking');
  },
});

const Booking = bookshelf.model('Booking', {
  tableName: 'bookings',

  patient() {
    return this.belongsTo('Patient');
  },

  slots() {
    return this.hasMany('Slot');
  },
});

const Patient = bookshelf.model('Patient', {
  tableName: 'patients',

  bookings() {
    return this.hasMany('Booking');
  },
});

const User = bookshelf.model('User', {
  tableName: 'users',
});

const CartItem = bookshelf.model('CartItem', {
  tableName: 'cart_items',
});

const BlacklistedToken = bookshelf.model('BlacklistedToken', {
  tableName: 'blacklisted_tokens',
});

module.exports = {
  Organisation,
  Service,
  ServiceType,
  Slot,
  Patient,
  Booking,
  User,
  BlacklistedToken,
};
