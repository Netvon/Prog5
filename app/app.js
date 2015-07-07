
var routesConfig = require('./config/routes');
var overviewCtrl = require("./controllers/overviewCtrl");
var twentytwenty = require('./directives/twentytwenty');

var app = angular.module('Prog5', ["PointyPony"]);

app.constant('appConfig', {
	courseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IlByb2c1Ig.Lbd5e9wYohfEPkA-t_DE4SJuIIrpyKQBwHiA73dpTXQ",
});

app.config(routesConfig);
app.controller('overviewCtrl', overviewCtrl);
app.directive('twentytwenty', twentytwenty);


//Initialize angular material styling with bootstrap
$.material.init();