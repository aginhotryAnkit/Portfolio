require('dotenv').config();

// Import models first to ensure they're loaded
require('../src/database/models/profile.model');
require('../src/database/models/experience.model');
require('../src/database/models/projects.model');

const app = require('../src/app');
const sequelize = require('../src/database/db');

let isDbConnected = false;

// Wrap handler to ensure DB connection before handling requests
module.exports = async (req, res) => {
  if (!isDbConnected) {
    try {
      await sequelize.authenticate();
      console.log('✅ PostgreSQL connected');
      isDbConnected = true;
    } catch (err) {
      console.error('❌ DB connection failed:', err.message);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }
  return app(req, res);
};
