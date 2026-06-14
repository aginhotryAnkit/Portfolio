const { PersonalDetail, ProfileSummary, Education, Skill, CoreCompetency, Certification, Hobby } = require('../../database/models/profile.model');

const getProfile = async () => {
  const [personal, summary, education, skills, competencies, certifications, hobbies] = await Promise.all([
    PersonalDetail.findOne(),
    ProfileSummary.findOne(),
    Education.findAll(),
    Skill.findAll(),
    CoreCompetency.findAll(),
    Certification.findAll(),
    Hobby.findAll(),
  ]);
  return { personal, summary, education, skills, competencies, certifications, hobbies };
};

const updatePersonal = async (data) => {
  const record = await PersonalDetail.findOne();
  if (record) return record.update(data);
  return PersonalDetail.create(data);
};

const updateSummary = async (data) => {
  const record = await ProfileSummary.findOne();
  if (record) return record.update(data);
  return ProfileSummary.create(data);
};

const addEducation = async (data) => Education.create(data);
const updateEducation = async (id, data) => Education.update(data, { where: { id } });
const deleteEducation = async (id) => Education.destroy({ where: { id } });

const addSkill = async (data) => Skill.create(data);
const updateSkill = async (id, data) => Skill.update(data, { where: { id } });
const deleteSkill = async (id) => Skill.destroy({ where: { id } });

const addCompetency = async (data) => CoreCompetency.create(data);
const deleteCompetency = async (id) => CoreCompetency.destroy({ where: { id } });

const addCertification = async (data) => Certification.create(data);
const deleteCertification = async (id) => Certification.destroy({ where: { id } });

const addHobby = async (data) => Hobby.create(data);
const deleteHobby = async (id) => Hobby.destroy({ where: { id } });

module.exports = {
  getProfile, updatePersonal, updateSummary,
  addEducation, updateEducation, deleteEducation,
  addSkill, updateSkill, deleteSkill,
  addCompetency, deleteCompetency,
  addCertification, deleteCertification,
  addHobby, deleteHobby,
};
