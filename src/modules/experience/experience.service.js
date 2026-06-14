const { WorkExperience } = require('../../database/models/experience.model');

const getAll = async () => WorkExperience.findAll({ order: [['createdAt', 'DESC']] });
const getOne = async (id) => WorkExperience.findByPk(id);
const create = async (data) => WorkExperience.create(data);
const update = async (id, data) => WorkExperience.update(data, { where: { id } });
const remove = async (id) => WorkExperience.destroy({ where: { id } });

module.exports = { getAll, getOne, create, update, remove };
