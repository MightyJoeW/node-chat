const express = require("express");
const bodyParser = require("body-parser");
const messageCtrl = require(__dirname + "/controllers/messages_controller");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

const baseURL = "/api/messages";
app.post(baseURL, messageCtrl.create);
app.get(baseURL, messageCtrl.read);
app.put(`${baseURL}/:id`, messageCtrl.update);
app.delete(`${baseURL}/:id`, messageCtrl.delete);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
