require('dotenv').config();
const { Sequelize } = require('sequelize');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

let sequelize;

if (isVercel) {
  const { neonConfig } = require('@neondatabase/serverless');
  neonConfig.webSocketConstructor = require('ws');
  
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: require('@neondatabase/serverless'),
    logging: false,
  });
} else if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    },
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
      logging: false,
      dialectOptions: isProduction
        ? { ssl: { require: true, rejectUnauthorized: false } }
        : {},
    }
  );
}

module.exports = sequelize;
