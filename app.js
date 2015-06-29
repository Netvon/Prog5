(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');

var overviewCtrl = require("./controller/overviewCtrl");

var app = angular.module('Prog5', ["PointyPony"]);

app.config(routesConfig);
app.controller('overviewCtrl', overviewCtrl);

//Initialize angular material styling with bootstrap
$.material.init()
},{"./config/routes":2,"./controller/overviewCtrl":3}],2:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        .state('home', { url: '/home',  templateUrl:'default/home.html' })
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlci9vdmVydmlld0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgcm91dGVzQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzJyk7XHJcblxyXG52YXIgb3ZlcnZpZXdDdHJsID0gcmVxdWlyZShcIi4vY29udHJvbGxlci9vdmVydmlld0N0cmxcIik7XHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Byb2c1JywgW1wiUG9pbnR5UG9ueVwiXSk7XHJcblxyXG5hcHAuY29uZmlnKHJvdXRlc0NvbmZpZyk7XHJcbmFwcC5jb250cm9sbGVyKCdvdmVydmlld0N0cmwnLCBvdmVydmlld0N0cmwpO1xyXG5cclxuLy9Jbml0aWFsaXplIGFuZ3VsYXIgbWF0ZXJpYWwgc3R5bGluZyB3aXRoIGJvb3RzdHJhcFxyXG4kLm1hdGVyaWFsLmluaXQoKSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdob21lJyk7XHJcbiAgICBcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywgeyB1cmw6ICcvaG9tZScsICB0ZW1wbGF0ZVVybDonZGVmYXVsdC9ob21lLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMScsIHsgdXJsOiAnL3dlZWsxJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMU9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMS9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9vcGRyYWNodGVuLmh0bWwnIH0pO1xyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihkYXRhLCB0d28pe1xyXG5cdFx0JCgnI292ZXJ2aWV3JykuY3NzKCdtYXJnaW4tdG9wJywgLTQ1ICsgJCh0aGlzKS5zY3JvbGxUb3AoKSArIFwicHhcIik7XHJcblx0fSk7XHJcblx0XHJcblx0c2VsZi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHQgICAgICAgIHNjcm9sbFRvcDogJChlbGVtZW50SWQpLm9mZnNldCgpLnRvcCArIC0xNTBcclxuXHQgICAgfSwgMTAwMCk7XHJcblx0fTtcclxuXHJcbn0iXX0=
