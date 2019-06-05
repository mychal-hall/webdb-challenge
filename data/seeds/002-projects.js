exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          name: "First Project",
          description: "This is project 1.",
          bool_flag: 0
        },
        {
          id: 2,
          name: "Second Project",
          description: "This is project 2.",
          bool_flag: 0
        },
        {
          id: 3,
          name: "Third Project",
          description: "This is project 3.",
          bool_flag: 0
        },
        {
          id: 4,
          name: "Fourth",
          description: "This is project 4.",
          bool_flag: 0
        }
      ]);
    });
};
