const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
//initiate app

const app = express();

//port

const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());
//database

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB running successfully"))
  .catch((err) => console.log(err));

app.use("/api/users", users);

//listen

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
