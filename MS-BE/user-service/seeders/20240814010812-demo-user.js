"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("password456", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "john_doe",
          email: "john.doe@example.com",
          password: hashedPassword1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "jane_smith",
          email: "jane.smith@example.com",
          password: hashedPassword2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
