require('dotenv').config();
const app = require('../src/app');
const sequelize = require('../src/database/db');

// Attempt DB connection but don't crash if it fails on cold start
sequelize.authenticate()
  .then(() => {
    console.log('✅ PostgreSQL connected');
    return sequelize.sync();
  })
  .catch((err) => {
    console.error('⚠️  DB connection warning:', err.message);
  });

// Export the Express app as a Vercel serverless function
module.exports = app;
