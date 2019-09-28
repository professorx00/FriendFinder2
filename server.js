const express = require("express");
const path = require("path");
const routes = require('./routers/router.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/",routes);
app.use("/public", function(){
    console.log("public")
})

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});