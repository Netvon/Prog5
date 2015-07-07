(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
},{"./config/routes":2,"./controllers/overviewCtrl":3,"./directives/twentytwenty":4}],2:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        .state('home', { url: '/home',  templateUrl:'default/home.html' })
        .state('profile', { url: '/profile',  templateUrl:'default/profile.html' })
                
        .state('week1', { url: '/week1',  templateUrl:'week1/informatie.html' })
        .state('week1Opdrachten', { url: '/week1/opdrachten',  templateUrl:'week1/opdrachten.html' })
        
        .state('week2', { url: '/week2',  templateUrl:'week2/informatie.html' })
        .state('week2Opdrachten', { url: '/week2/opdrachten',  templateUrl:'week2/opdrachten.html' });
   
};
},{}],3:[function(require,module,exports){
module.exports = function($scope){
	var self = $scope;
	
	$(window).on('scroll', function(data, two){
		$('#overview').css('top',  $(this).scrollTop() + "px");
	});
	
	self.scrollTo = function(elementId){
	    $('html, body').animate({
	        scrollTop: $(elementId).offset().top + -150
	    }, 1000);
	};

}
},{}],4:[function(require,module,exports){
module.exports = function() {
  return {
	transclude: true,
	template: "<div class='row'><div class='col-md-1'></div><div class='col-md-10'><ng-transclude></ng-transclude></div><div class='col-md-1'></div></div>",
    link: function(scope, element){
		
		//Moet met timeout dankzij bootstrap
		setTimeout(function() {
			$(element).find('.wrapper').twentytwenty();
		}, 300);
		
			
	}
  };
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlcnMvb3ZlcnZpZXdDdHJsLmpzIiwiYXBwL2RpcmVjdGl2ZXMvdHdlbnR5dHdlbnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxudmFyIHJvdXRlc0NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL3JvdXRlcycpO1xyXG52YXIgb3ZlcnZpZXdDdHJsID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvb3ZlcnZpZXdDdHJsXCIpO1xyXG52YXIgdHdlbnR5dHdlbnR5ID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL3R3ZW50eXR3ZW50eScpO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdQcm9nNScsIFtcIlBvaW50eVBvbnlcIl0pO1xyXG5cclxuYXBwLmNvbnN0YW50KCdhcHBDb25maWcnLCB7XHJcblx0Y291cnNlVG9rZW46IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LklsQnliMmMxSWcuTGJkNWU5d1lvaGZFUGtBLXRfREU0U0p1SUlycHlLUUJ3SGlBNzNkcFRYUVwiLFxyXG59KTtcclxuXHJcbmFwcC5jb25maWcocm91dGVzQ29uZmlnKTtcclxuYXBwLmNvbnRyb2xsZXIoJ292ZXJ2aWV3Q3RybCcsIG92ZXJ2aWV3Q3RybCk7XHJcbmFwcC5kaXJlY3RpdmUoJ3R3ZW50eXR3ZW50eScsIHR3ZW50eXR3ZW50eSk7XHJcblxyXG5cclxuLy9Jbml0aWFsaXplIGFuZ3VsYXIgbWF0ZXJpYWwgc3R5bGluZyB3aXRoIGJvb3RzdHJhcFxyXG4kLm1hdGVyaWFsLmluaXQoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgIFxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnaG9tZScpO1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHsgdXJsOiAnL2hvbWUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvaG9tZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHsgdXJsOiAnL3Byb2ZpbGUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvcHJvZmlsZS5odG1sJyB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMScsIHsgdXJsOiAnL3dlZWsxJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMU9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMS9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9vcGRyYWNodGVuLmh0bWwnIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMicsIHsgdXJsOiAnL3dlZWsyJywgIHRlbXBsYXRlVXJsOid3ZWVrMi9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMk9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMi9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMi9vcGRyYWNodGVuLmh0bWwnIH0pO1xyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihkYXRhLCB0d28pe1xyXG5cdFx0JCgnI292ZXJ2aWV3JykuY3NzKCd0b3AnLCAgJCh0aGlzKS5zY3JvbGxUb3AoKSArIFwicHhcIik7XHJcblx0fSk7XHJcblx0XHJcblx0c2VsZi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHQgICAgICAgIHNjcm9sbFRvcDogJChlbGVtZW50SWQpLm9mZnNldCgpLnRvcCArIC0xNTBcclxuXHQgICAgfSwgMTAwMCk7XHJcblx0fTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB7XHJcblx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHR0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPSdyb3cnPjxkaXYgY2xhc3M9J2NvbC1tZC0xJz48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMTAnPjxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMSc+PC9kaXY+PC9kaXY+XCIsXHJcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcblx0XHRcclxuXHRcdC8vTW9ldCBtZXQgdGltZW91dCBkYW5remlqIGJvb3RzdHJhcFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JChlbGVtZW50KS5maW5kKCcud3JhcHBlcicpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdFx0fSwgMzAwKTtcclxuXHRcdFxyXG5cdFx0XHRcclxuXHR9XHJcbiAgfTtcclxufTsiXX0=
