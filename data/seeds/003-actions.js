exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          id: 1,
          name: "Action 1",
          project_id: 1,
          description: "This action belongs to project 1",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 2,
          name: "Action 2",
          project_id: 1,
          description: "This action belongs to project 1",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 3,
          name: "Action 3",
          project_id: 2,
          description: "This action belongs to project 2",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 4,
          name: "Action 4",
          project_id: 2,
          description: "This action belongs to project 2",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 5,
          name: "Action 5",
          project_id: 3,
          description: "This action belongs to project 3",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 6,
          name: "Action 6",
          project_id: 3,
          description: "This action belongs to project 3",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 7,
          name: "Action 7",
          project_id: 4,
          description: "This action belongs to project 4",
          notes: "This is a note",
          bool_flag: 0
        },
        {
          id: 8,
          name: "Action 8",
          project_id: 4,
          description: "This action belongs to project 5",
          notes: "This is a note",
          bool_flag: 0
        }
      ]);
    });
};
