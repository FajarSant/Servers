const express = require("express");
const { HotNewsControllers } = require("./HotNewsControllers");
const { ListNewsControllers } = require("./ListNewsControllers");
const { OlahragaControllers } = require("./OlahragaControllers");
const { PendidikanControllers } = require("./PendidikanControllers");
const { PertanianControllers } = require("./PertanianControllers");
const app = express();

app.get("/api/HotNews", HotNewsControllers);
app.get("/api/ListNews", ListNewsControllers);
app.get("/api/Olahraga", OlahragaControllers);
app.get("/api/Pendidikan", PendidikanControllers);
app.get("/api/Pertanian", PertanianControllers);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
