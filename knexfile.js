// Update with your config settings.
require("dotenv").config();
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_SOCKET = process.env.DB_SOCKET;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
// const DB_POOL_MIN = process.env.DB_POOL_MIN;
// const DB_POOL_MAX = process.env.DB_POOL_MAX;

const environments = {
	development: {
		client: "mysql",
		connection: {
			host: DB_HOST,
			port: DB_PORT,
			database: DB_DATABASE,
			user: DB_USERNAME,
			password: DB_PASSWORD,
			charset: "utf8mb4_bin",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	staging: {
		client: "postgresql",
		connection: {
			database: DB_DATABASE,
			user: DB_USERNAME,
			password: DB_PASSWORD,
			charset: "utf8mb4_bin",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "mysql",
		connection: {
			socketPath: DB_SOCKET,
			database: DB_DATABASE,
			user: DB_USERNAME,
			password: DB_PASSWORD,
			charset: "utf8mb4_bin",
		},
		pool: {
			min: Number(1),
			max: Number(4),
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},
};
module.exports = environments;
