(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');
var overviewCtrl = require("./controllers/overviewCtrl");
var twentytwenty = require('./directives/twentytwenty');
var hoverCtrl= require('./controllers/hoverCtrl');

var app = angular.module('Prog5', ["PointyPony", "ui.router", "ngAnimate"]);

app.constant('appConfig', {
	courseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IlByb2c1Ig.Lbd5e9wYohfEPkA-t_DE4SJuIIrpyKQBwHiA73dpTXQ",
});

app.controller('hoverCtrl', hoverCtrl);
app.controller('overviewCtrl', overviewCtrl);
app.directive('twentytwenty', twentytwenty);
app.config(routesConfig);

//Initialize angular material styling with bootstrap
$.material.init();
},{"./config/routes":2,"./controllers/hoverCtrl":3,"./controllers/overviewCtrl":4,"./directives/twentytwenty":5}],2:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        .state('home', { url: '/home?section',  templateUrl:'default/home.html' })
        .state('profile', { url: '/profile',  templateUrl:'default/profile.html' })
                
        .state('week1', { url: '/week1?section',  templateUrl:'week1/informatie.html' })
        .state('week1Opdrachten', { url: '/week1/opdrachten',  templateUrl:'week1/opdrachten.html' })
        
        .state('week2', { url: '/week2',  templateUrl:'week2/informatie.html' })
        .state('week2Opdrachten', { url: '/week2/opdrachten',  templateUrl:'week2/opdrachten.html' })
        
        .state('week3a', { url: '/week3/introductie',  templateUrl:'week3/informatie_intro.html' })
        .state('week3b', { url: '/week3/wpfbasics',  templateUrl:'week3/informatie_basics.html' })
        .state('week3Opdrachten', { url: '/week3/opdrachten',  templateUrl:'week3/opdrachten.html' })
        
        .state('week4', { url: '/week4',  templateUrl:'week4/informatie.html' })
        .state('week4Opdrachten', { url: '/week4/opdrachten',  templateUrl:'week4/opdrachten.html' })
        
        .state('week5', { url: '/week5',  templateUrl:'week5/informatie.html' })
        .state('week5Opdrachten', { url: '/week5/opdrachten',  templateUrl:'week5/opdrachten.html' })
        
        .state('week6', { url: '/week6',  templateUrl:'week6/informatie.html' })
        .state('week6Opdrachten', { url: '/week6/opdrachten',  templateUrl:'week6/opdrachten.html' });

};
},{}],3:[function(require,module,exports){
module.exports = function($scope){
	var self = $scope;
	
	var enable = false;
	self.isShowing = false;
	
	
	self.show = function(){
		if(!enable);
		self.isShowing = true;
	}
	
	self.hide = function(){
		if(!enable)
		self.isShowing = false;
	}
	
	self.toggle = function(){
		enable = !enable;
		self.isShowing = enable;
	}
}
},{}],4:[function(require,module,exports){
module.exports = function($scope){
	var self = $scope;
	
	$(window).on('scroll', function(data, two){
		$('#overview').css('top',  $(this).scrollTop() + "px");
	});
	
	self.scrollTo = function(elementId){
		
		localStorage.setItem('subMenuOpen',  elementId);
		var element = document.getElementById(elementId);
		
		if(element){
			
		
		    $('html, body').animate({
		        scrollTop: $(element).offset().top + -150
		    }, 1000);
		}
		
	};
	
	self.goTo = function(elementId){
		
		var element = document.getElementById(elementId);
		
		if(element){

		    $('html, body').animate({
		        scrollTop: $(element).offset().top + -150
		    }, 100);
		}
	}
	
	
	var lastOpenId = localStorage.getItem('subMenuOpen');
	self.goTo(lastOpenId);

}
},{}],5:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlcnMvaG92ZXJDdHJsLmpzIiwiYXBwL2NvbnRyb2xsZXJzL292ZXJ2aWV3Q3RybC5qcyIsImFwcC9kaXJlY3RpdmVzL3R3ZW50eXR3ZW50eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbnZhciByb3V0ZXNDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9yb3V0ZXMnKTtcclxudmFyIG92ZXJ2aWV3Q3RybCA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL292ZXJ2aWV3Q3RybFwiKTtcclxudmFyIHR3ZW50eXR3ZW50eSA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy90d2VudHl0d2VudHknKTtcclxudmFyIGhvdmVyQ3RybD0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9ob3ZlckN0cmwnKTtcclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnUHJvZzUnLCBbXCJQb2ludHlQb255XCIsIFwidWkucm91dGVyXCIsIFwibmdBbmltYXRlXCJdKTtcclxuXHJcbmFwcC5jb25zdGFudCgnYXBwQ29uZmlnJywge1xyXG5cdGNvdXJzZVRva2VuOiBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JbEJ5YjJjMUlnLkxiZDVlOXdZb2hmRVBrQS10X0RFNFNKdUlJcnB5S1FCd0hpQTczZHBUWFFcIixcclxufSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignaG92ZXJDdHJsJywgaG92ZXJDdHJsKTtcclxuYXBwLmNvbnRyb2xsZXIoJ292ZXJ2aWV3Q3RybCcsIG92ZXJ2aWV3Q3RybCk7XHJcbmFwcC5kaXJlY3RpdmUoJ3R3ZW50eXR3ZW50eScsIHR3ZW50eXR3ZW50eSk7XHJcbmFwcC5jb25maWcocm91dGVzQ29uZmlnKTtcclxuXHJcbi8vSW5pdGlhbGl6ZSBhbmd1bGFyIG1hdGVyaWFsIHN0eWxpbmcgd2l0aCBib290c3RyYXBcclxuJC5tYXRlcmlhbC5pbml0KCk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICBcclxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJ2hvbWUnKTtcclxuICAgIFxyXG4gICAgJHN0YXRlUHJvdmlkZXJcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ2hvbWUnLCB7IHVybDogJy9ob21lP3NlY3Rpb24nLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvaG9tZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHsgdXJsOiAnL3Byb2ZpbGUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvcHJvZmlsZS5odG1sJyB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMScsIHsgdXJsOiAnL3dlZWsxP3NlY3Rpb24nLCAgdGVtcGxhdGVVcmw6J3dlZWsxL2luZm9ybWF0aWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWsxT3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWsxL29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWsxL29wZHJhY2h0ZW4uaHRtbCcgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWsyJywgeyB1cmw6ICcvd2VlazInLCAgdGVtcGxhdGVVcmw6J3dlZWsyL2luZm9ybWF0aWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWsyT3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWsyL29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWsyL29wZHJhY2h0ZW4uaHRtbCcgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWszYScsIHsgdXJsOiAnL3dlZWszL2ludHJvZHVjdGllJywgIHRlbXBsYXRlVXJsOid3ZWVrMy9pbmZvcm1hdGllX2ludHJvLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrM2InLCB7IHVybDogJy93ZWVrMy93cGZiYXNpY3MnLCAgdGVtcGxhdGVVcmw6J3dlZWszL2luZm9ybWF0aWVfYmFzaWNzLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrM09wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMy9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMy9vcGRyYWNodGVuLmh0bWwnIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNCcsIHsgdXJsOiAnL3dlZWs0JywgIHRlbXBsYXRlVXJsOid3ZWVrNC9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNE9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrNC9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrNC9vcGRyYWNodGVuLmh0bWwnIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNScsIHsgdXJsOiAnL3dlZWs1JywgIHRlbXBsYXRlVXJsOid3ZWVrNS9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNU9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrNS9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrNS9vcGRyYWNodGVuLmh0bWwnIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNicsIHsgdXJsOiAnL3dlZWs2JywgIHRlbXBsYXRlVXJsOid3ZWVrNi9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrNk9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrNi9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrNi9vcGRyYWNodGVuLmh0bWwnIH0pO1xyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0dmFyIGVuYWJsZSA9IGZhbHNlO1xyXG5cdHNlbGYuaXNTaG93aW5nID0gZmFsc2U7XHJcblx0XHJcblx0XHJcblx0c2VsZi5zaG93ID0gZnVuY3Rpb24oKXtcclxuXHRcdGlmKCFlbmFibGUpO1xyXG5cdFx0c2VsZi5pc1Nob3dpbmcgPSB0cnVlO1xyXG5cdH1cclxuXHRcclxuXHRzZWxmLmhpZGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIWVuYWJsZSlcclxuXHRcdHNlbGYuaXNTaG93aW5nID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG5cdHNlbGYudG9nZ2xlID0gZnVuY3Rpb24oKXtcclxuXHRcdGVuYWJsZSA9ICFlbmFibGU7XHJcblx0XHRzZWxmLmlzU2hvd2luZyA9IGVuYWJsZTtcclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihkYXRhLCB0d28pe1xyXG5cdFx0JCgnI292ZXJ2aWV3JykuY3NzKCd0b3AnLCAgJCh0aGlzKS5zY3JvbGxUb3AoKSArIFwicHhcIik7XHJcblx0fSk7XHJcblx0XHJcblx0c2VsZi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0XHRcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdWJNZW51T3BlbicsICBlbGVtZW50SWQpO1xyXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG5cdFx0XHJcblx0XHRpZihlbGVtZW50KXtcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJChlbGVtZW50KS5vZmZzZXQoKS50b3AgKyAtMTUwXHJcblx0XHQgICAgfSwgMTAwMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdHNlbGYuZ29UbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0XHRcclxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuXHRcdFxyXG5cdFx0aWYoZWxlbWVudCl7XHJcblxyXG5cdFx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcCArIC0xNTBcclxuXHRcdCAgICB9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHR2YXIgbGFzdE9wZW5JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdWJNZW51T3BlbicpO1xyXG5cdHNlbGYuZ29UbyhsYXN0T3BlbklkKTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB7XHJcblx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHR0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPSdyb3cnPjxkaXYgY2xhc3M9J2NvbC1tZC0xJz48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMTAnPjxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMSc+PC9kaXY+PC9kaXY+XCIsXHJcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcblx0XHRcclxuXHRcdC8vTW9ldCBtZXQgdGltZW91dCBkYW5remlqIGJvb3RzdHJhcFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JChlbGVtZW50KS5maW5kKCcud3JhcHBlcicpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdFx0fSwgMzAwKTtcclxuXHRcdFxyXG5cdFx0XHRcclxuXHR9XHJcbiAgfTtcclxufTsiXX0=
