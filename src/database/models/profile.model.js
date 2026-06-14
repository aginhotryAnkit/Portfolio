const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PersonalDetail = sequelize.define('PersonalDetail', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  linkedin: { type: DataTypes.STRING },
  github: { type: DataTypes.STRING },
  languages: { type: DataTypes.STRING },
  profile_photo: { type: DataTypes.STRING, defaultValue: null },
}, { tableName: 'personal_details', timestamps: true });

const ProfileSummary = sequelize.define('ProfileSummary', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  content: { type: DataTypes.TEXT, allowNull: false },
}, { tableName: 'profile_summary', timestamps: true });

const Education = sequelize.define('Education', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  degree: { type: DataTypes.STRING, allowNull: false },
  institution: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.STRING },
  percentage: { type: DataTypes.STRING },
}, { tableName: 'education', timestamps: true });

const Skill = sequelize.define('Skill', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  category: {
    type: DataTypes.ENUM('language', 'framework', 'database', 'cloud', 'tool', 'security', 'architecture'),
    allowNull: false,
  },
}, { tableName: 'skills', timestamps: true });

const CoreCompetency = sequelize.define('CoreCompetency', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
}, { tableName: 'core_competencies', timestamps: true });

const Certification = sequelize.define('Certification', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  issuer: { type: DataTypes.STRING },
  logo: { type: DataTypes.STRING },
}, { tableName: 'certifications', timestamps: true });

const Hobby = sequelize.define('Hobby', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  emoji: { type: DataTypes.STRING },
}, { tableName: 'hobbies', timestamps: true });

module.exports = { PersonalDetail, ProfileSummary, Education, Skill, CoreCompetency, Certification, Hobby };
