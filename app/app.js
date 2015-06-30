
var routesConfig = require('./config/routes');

var overviewCtrl = require("./controller/overviewCtrl");


var app = angular.module('Prog5', ["PointyPony"]);

app.config(routesConfig);
app.controller('overviewCtrl', overviewCtrl);

//Initialize angular material styling with bootstrap
$.material.init();