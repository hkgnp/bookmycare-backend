const express = require('express');
const router = express.Router();

// import model
const { Service } = require('../models');

// import forms
const { bootstrapField, createServiceForm } = require('../forms');

// import dal
const getServiceDataLayer = require('../dal/dal_services');

router.get('/', async (req, res) => {
  const allOrganisations = await getServiceDataLayer.getAllOrganisations();

  res.render('/services/index', {
    services: services.toJSON(),
    form: form.toHTML(bootstrapField),
  });
});

router.get('/create', (req, res) => {
  const serviceForm = createServiceForm();

  res.render('services/create', {
    form: serviceForm.toHTML(bootstrapField),
  });
});

module.exports = router;
