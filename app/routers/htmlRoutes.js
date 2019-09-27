const routes = require('express').Router();
const path = require("path");


routes.get('/', (req, res) => {
    console.log("httproutes /");
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

routes.get('/survey', (req, res) => {
    console.log("httproutes /survey");
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
})

module.exports = routes;