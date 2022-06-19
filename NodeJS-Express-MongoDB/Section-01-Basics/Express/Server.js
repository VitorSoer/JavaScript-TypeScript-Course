const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log(request.params);
  console.log(request.query);
  response.send(request.query);
});

app.get("/contact", (request, response) => {
  response.send("That's All");
});

app.listen(3000, () => {
  console.log("Starts at port 3000...");
});
