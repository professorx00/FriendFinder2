const express = require("express");
const path = require("path");
const routes = require('./app/routers/router.js');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('/app/api/public'))
app.use(express.static('/app/api/public/assets/imgs'))

app.use("/",routes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});