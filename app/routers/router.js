const routes = require('express').Router();
const express = require("express");
const path = require("path");

const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

routes.use(express.static(path.join(__dirname, 'public')));
routes.use(express.static(path.join(__dirname, 'app')));

routes.use('/api', apiRoutes);
routes.use('/', htmlRoutes);

module.exports = routes;