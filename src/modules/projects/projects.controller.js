const projectsService = require('./projects.service');
const { success } = require('../../utils/response');

const getAllProjects = async (req, res, next) => {
  try {
    const data = await projectsService.getAllProjects();
    success(res, data, 'Projects fetched');
  } catch (err) { next(err); }
};

const createProject = async (req, res, next) => {
  try {
    const data = await projectsService.createProject(req.body);
    success(res, data, 'Project created', 201);
  } catch (err) { next(err); }
};

const updateProject = async (req, res, next) => {
  try {
    await projectsService.updateProject(req.params.id, req.body);
    success(res, null, 'Project updated');
  } catch (err) { next(err); }
};

const deleteProject = async (req, res, next) => {
  try {
    await projectsService.deleteProject(req.params.id);
    success(res, null, 'Project deleted');
  } catch (err) { next(err); }
};

const getAllAchievements = async (req, res, next) => {
  try {
    const data = await projectsService.getAllAchievements();
    success(res, data, 'Achievements fetched');
  } catch (err) { next(err); }
};

const createAchievement = async (req, res, next) => {
  try {
    const data = await projectsService.createAchievement(req.body);
    success(res, data, 'Achievement created', 201);
  } catch (err) { next(err); }
};

const deleteAchievement = async (req, res, next) => {
  try {
    await projectsService.deleteAchievement(req.params.id);
    success(res, null, 'Achievement deleted');
  } catch (err) { next(err); }
};

module.exports = {
  getAllProjects, createProject, updateProject, deleteProject,
  getAllAchievements, createAchievement, deleteAchievement,
};
