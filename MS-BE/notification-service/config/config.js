module.exports = {
  development: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db",
    host: "127.0.0.1",
    dialect: "mssql",
    logging: false, // Disable SQL query logging
  },
  test: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db_test",
    host: "127.0.0.1",
    dialect: "mssql",
  },
  production: {
    username: "sa",
    password: "124253BrJd",
    database: "todo_db_prod",
    host: "127.0.0.1",
    dialect: "mssql",
  },
};
