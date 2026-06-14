require('dotenv').config();
const app = require('../src/app');
const sequelize = require('../src/database/db');

// Fire-and-forget DB auth check — do NOT sync() in serverless (run migrations separately)
sequelize.authenticate()
  .then(() => console.log('✅ PostgreSQL connected'))
  .catch((err) => console.error('⚠️  DB connection warning:', err.message));

// Export the Express app as a Vercel serverless function handler
module.exports = app;
