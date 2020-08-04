//Set static folder Express Node js
app.use(express.static(path.join(__dirname, "public")));

//Port variable
const port = 3000 || process.env.PORT;

//Set up express server with static folder
const express = require("express");
const app = express();
const path = require("path");
const http = require("http").createServer(app);

//Port variable
const port = 3000 || process.env.PORT;

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Start the server
http.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
