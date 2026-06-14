const experienceService = require('./experience.service');
const { success } = require('../../utils/response');

const getAll = async (req, res, next) => {
  try {
    const data = await experienceService.getAll();
    success(res, data, 'Experience fetched');
  } catch (err) { next(err); }
};

const create = async (req, res, next) => {
  try {
    const data = await experienceService.create(req.body);
    success(res, data, 'Experience created', 201);
  } catch (err) { next(err); }
};

const update = async (req, res, next) => {
  try {
    await experienceService.update(req.params.id, req.body);
    success(res, null, 'Experience updated');
  } catch (err) { next(err); }
};

const remove = async (req, res, next) => {
  try {
    await experienceService.remove(req.params.id);
    success(res, null, 'Experience deleted');
  } catch (err) { next(err); }
};

module.exports = { getAll, create, update, remove };
