"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          taskId: 1, // Assuming the task with ID 1 exists
          message:
            "Reminder: Create remote repository and push the latest code in the master branch",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskId: 2, // Assuming the task with ID 2 exists
          message: "Reminder: Complete project documentation by August 20",
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Notifications", null, {});
  },
};
