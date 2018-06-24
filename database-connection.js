/*
const environment = process.env.NODE_ENV || 'development'
const config = require('./server/knexfile')
const environmentConfig = config[environment]
const knex = require('knex')
const connection = knex(environmentConfig)

module.exports = connection
*/

const CONFIG = require("./knexfile")[process.env.NODE_ENV || "development"];
module.exports = require("knex")(CONFIG);