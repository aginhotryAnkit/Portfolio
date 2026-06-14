const { Project, Achievement } = require('../../database/models/projects.model');

const getAllProjects = async () => Project.findAll({ order: [['is_featured', 'DESC'], ['createdAt', 'DESC']] });
const getOneProject = async (id) => Project.findByPk(id);
const createProject = async (data) => Project.create(data);
const updateProject = async (id, data) => Project.update(data, { where: { id } });
const deleteProject = async (id) => Project.destroy({ where: { id } });

const getAllAchievements = async () => Achievement.findAll();
const createAchievement = async (data) => Achievement.create(data);
const deleteAchievement = async (id) => Achievement.destroy({ where: { id } });

module.exports = {
  getAllProjects, getOneProject, createProject, updateProject, deleteProject,
  getAllAchievements, createAchievement, deleteAchievement,
};
