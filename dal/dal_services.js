const { Service, Organisation, Patient } = require('../models');

const getAllServices = async () => {
  return await Service.fetchAll();
};

const getAllOrganisations = async () => {
  const fetchOrgnisations = await Organisation.fetchAll();
  const allOrganisations = fetchOrgnisations.map((org) => {
    return [org.get('id'), org.get('name')];
  });
  return allOrganisations;
};

const getAllPatients = async () => {
  return await Patient.fetchAll();
};

module.exports = {
  getAllServices,
  getAllOrganisations,
};
