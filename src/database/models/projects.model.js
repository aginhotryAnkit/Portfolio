const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Project = sequelize.define('Project', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  tech_stack: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] },
  github_url: { type: DataTypes.STRING },
  live_url: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING, defaultValue: '/images/projects/placeholder.png' },
  is_featured: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { tableName: 'projects', timestamps: true });

const Achievement = sequelize.define('Achievement', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
}, { tableName: 'achievements', timestamps: true });

module.exports = { Project, Achievement };
