const profileService = require('./profile.service');
const { success, error } = require('../../utils/response');

const getProfile = async (req, res, next) => {
  try {
    const data = await profileService.getProfile();
    success(res, data, 'Profile fetched');
  } catch (err) { next(err); }
};

const updatePersonal = async (req, res, next) => {
  try {
    const data = await profileService.updatePersonal(req.body);
    success(res, data, 'Personal details updated');
  } catch (err) { next(err); }
};

const updateSummary = async (req, res, next) => {
  try {
    const data = await profileService.updateSummary(req.body);
    success(res, data, 'Summary updated');
  } catch (err) { next(err); }
};

const addEducation = async (req, res, next) => {
  try {
    const data = await profileService.addEducation(req.body);
    success(res, data, 'Education added', 201);
  } catch (err) { next(err); }
};

const updateEducation = async (req, res, next) => {
  try {
    await profileService.updateEducation(req.params.id, req.body);
    success(res, null, 'Education updated');
  } catch (err) { next(err); }
};

const deleteEducation = async (req, res, next) => {
  try {
    await profileService.deleteEducation(req.params.id);
    success(res, null, 'Education deleted');
  } catch (err) { next(err); }
};

const addSkill = async (req, res, next) => {
  try {
    const data = await profileService.addSkill(req.body);
    success(res, data, 'Skill added', 201);
  } catch (err) { next(err); }
};

const updateSkill = async (req, res, next) => {
  try {
    await profileService.updateSkill(req.params.id, req.body);
    success(res, null, 'Skill updated');
  } catch (err) { next(err); }
};

const deleteSkill = async (req, res, next) => {
  try {
    await profileService.deleteSkill(req.params.id);
    success(res, null, 'Skill deleted');
  } catch (err) { next(err); }
};

const addCompetency = async (req, res, next) => {
  try {
    const data = await profileService.addCompetency(req.body);
    success(res, data, 'Competency added', 201);
  } catch (err) { next(err); }
};

const deleteCompetency = async (req, res, next) => {
  try {
    await profileService.deleteCompetency(req.params.id);
    success(res, null, 'Competency deleted');
  } catch (err) { next(err); }
};

const addCertification = async (req, res, next) => {
  try {
    const data = await profileService.addCertification(req.body);
    success(res, data, 'Certification added', 201);
  } catch (err) { next(err); }
};

const deleteCertification = async (req, res, next) => {
  try {
    await profileService.deleteCertification(req.params.id);
    success(res, null, 'Certification deleted');
  } catch (err) { next(err); }
};

const addHobby = async (req, res, next) => {
  try {
    const data = await profileService.addHobby(req.body);
    success(res, data, 'Hobby added', 201);
  } catch (err) { next(err); }
};

const deleteHobby = async (req, res, next) => {
  try {
    await profileService.deleteHobby(req.params.id);
    success(res, null, 'Hobby deleted');
  } catch (err) { next(err); }
};

module.exports = {
  getProfile, updatePersonal, updateSummary,
  addEducation, updateEducation, deleteEducation,
  addSkill, updateSkill, deleteSkill,
  addCompetency, deleteCompetency,
  addCertification, deleteCertification,
  addHobby, deleteHobby,
};
