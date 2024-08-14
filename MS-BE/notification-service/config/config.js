module.exports = {
  development: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db",
    host: "localhost",
    dialect: "mssql",
    port: 1433,
    logging: false, // Disable SQL query logging
    dialectOptions: {
      options: {
        encrypt: false, // Set to false if not using SSL/TLS
        trustServerCertificate: true, // Necessary if SSL/TLS is disabled
      },
    },
  },
  test: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db_test",
    host: "localhost",
    dialect: "mssql",
  },
  production: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db_prod",
    host: "localhost",
    dialect: "mssql",
  },
};
