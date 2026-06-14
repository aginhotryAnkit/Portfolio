const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const WorkExperience = sequelize.define('WorkExperience', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  company: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  start_date: { type: DataTypes.STRING, allowNull: false },
  end_date: { type: DataTypes.STRING },
  is_current: { type: DataTypes.BOOLEAN, defaultValue: false },
  points: { type: DataTypes.ARRAY(DataTypes.TEXT), defaultValue: [] },
  company_logo: { type: DataTypes.STRING },
}, { tableName: 'work_experience', timestamps: true });

module.exports = { WorkExperience };
