require('dotenv').config();
const { Sequelize } = require('sequelize');

// Set this BEFORE creating Sequelize instance
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const isProduction = process.env.NODE_ENV === 'production';

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
  : new Sequelize(
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

module.exports = sequelize;
