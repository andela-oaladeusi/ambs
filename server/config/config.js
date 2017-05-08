const dotenv = require('dotenv');

dotenv.config();

const environment = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false
  },
  test: {
    url: process.env.DATABASE_TEST_URL,
    dialect: 'postgres',
    logging: false
  },
  production: {
    url: process.env.DATABASE_URL
  }
};

module.exports = environment;
