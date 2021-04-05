const bookshelf = require('../bookshelf');

const Organisation = bookshelf.model('Organisation', {
  tableName: 'organisations',
});

const Patient = bookshelf.model('Patient', {
  tableName: 'patients',
});
