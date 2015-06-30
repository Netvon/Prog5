(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');

var overviewCtrl = require("./controller/overviewCtrl");


var app = angular.module('Prog5', ["PointyPony"]);

app.config(routesConfig);
app.controller('overviewCtrl', overviewCtrl);

//Initialize angular material styling with bootstrap
$.material.init();
},{"./config/routes":2,"./controller/overviewCtrl":3}],2:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        .state('home', { url: '/home',  templateUrl:'default/home.html' })
        .state('profile', { url: '/profile',  templateUrl:'default/profile.html' })
                
        .state('week1', { url: '/week1',  templateUrl:'week1/informatie.html' })
        .state('week1Opdrachten', { url: '/week1/opdrachten',  templateUrl:'week1/opdrachten.html' });
   
};
},{}],3:[function(require,module,exports){
module.exports = function($scope){
	var self = $scope;
	
	$(window).on('scroll', function(data, two){
		$('#overview').css('margin-top', -45 + $(this).scrollTop() + "px");
	});
	
	self.scrollTo = function(elementId){
	    $('html, body').animate({
	        scrollTop: $(elementId).offset().top + -150
	    }, 1000);
	};

}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlci9vdmVydmlld0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgcm91dGVzQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzJyk7XHJcblxyXG52YXIgb3ZlcnZpZXdDdHJsID0gcmVxdWlyZShcIi4vY29udHJvbGxlci9vdmVydmlld0N0cmxcIik7XHJcblxyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdQcm9nNScsIFtcIlBvaW50eVBvbnlcIl0pO1xyXG5cclxuYXBwLmNvbmZpZyhyb3V0ZXNDb25maWcpO1xyXG5hcHAuY29udHJvbGxlcignb3ZlcnZpZXdDdHJsJywgb3ZlcnZpZXdDdHJsKTtcclxuXHJcbi8vSW5pdGlhbGl6ZSBhbmd1bGFyIG1hdGVyaWFsIHN0eWxpbmcgd2l0aCBib290c3RyYXBcclxuJC5tYXRlcmlhbC5pbml0KCk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICBcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJ2hvbWUnKTtcclxuICAgIFxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7IHVybDogJy9ob21lJywgIHRlbXBsYXRlVXJsOidkZWZhdWx0L2hvbWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3Byb2ZpbGUnLCB7IHVybDogJy9wcm9maWxlJywgIHRlbXBsYXRlVXJsOidkZWZhdWx0L3Byb2ZpbGUuaHRtbCcgfSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazEnLCB7IHVybDogJy93ZWVrMScsICB0ZW1wbGF0ZVVybDond2VlazEvaW5mb3JtYXRpZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazFPcGRyYWNodGVuJywgeyB1cmw6ICcvd2VlazEvb3BkcmFjaHRlbicsICB0ZW1wbGF0ZVVybDond2VlazEvb3BkcmFjaHRlbi5odG1sJyB9KTtcclxuICAgXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc2NvcGUpe1xyXG5cdHZhciBzZWxmID0gJHNjb3BlO1xyXG5cdFxyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZGF0YSwgdHdvKXtcclxuXHRcdCQoJyNvdmVydmlldycpLmNzcygnbWFyZ2luLXRvcCcsIC00NSArICQodGhpcykuc2Nyb2xsVG9wKCkgKyBcInB4XCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHNlbGYuc2Nyb2xsVG8gPSBmdW5jdGlvbihlbGVtZW50SWQpe1xyXG5cdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0ICAgICAgICBzY3JvbGxUb3A6ICQoZWxlbWVudElkKS5vZmZzZXQoKS50b3AgKyAtMTUwXHJcblx0ICAgIH0sIDEwMDApO1xyXG5cdH07XHJcblxyXG59Il19
