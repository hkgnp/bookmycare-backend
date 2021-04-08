const forms = require('forms');

// create shortcuts
const fields = forms.fields;
const validators = forms.validators;
const widgets = forms.widgets;

const bootstrapField = function (name, object) {
  if (!Array.isArray(object.widget.classes)) {
    object.widget.classes = [];
  }

  if (object.widget.classes.indexOf('form-control') === -1) {
    object.widget.classes.push('form-control');
  }

  let validationclass = object.value && !object.error ? 'is-valid' : '';
  validationclass = object.error ? 'is-invalid' : validationclass;
  if (validationclass) {
    object.widget.classes.push(validationclass);
  }

  let label = object.labelHTML(name);
  let error = object.error
    ? '<div class="invalid-feedback">' + object.error + '</div>'
    : '';

  let widget = object.widget.toHTML(name, object);
  return '<div class="form-group">' + label + widget + error + '</div>';
};

const createServiceForm = () => {
  return forms.create({});
};

module.exports = { bootstrapField, createServiceForm };
