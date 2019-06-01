const server = require("./server.js");

const port = 4400;

server.listen(port, function() {
  console.log(`\n=== API Listening on http://localhost:${port} ===\n`);
});
