"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          title: "Complete project documentation",
          description:
            "Write the documentation for the To-Do Task List project",
          dueDate: new Date("2024-08-20"),
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Implement user authentication",
          description: "Develop the user login and registration features",
          dueDate: new Date("2024-08-22"),
          status: "in-progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Set up database schema",
          description:
            "Create and migrate the database schema for all microservices",
          dueDate: new Date("2024-08-18"),
          status: "completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
