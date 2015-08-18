(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');
var overviewCtrl = require("./controllers/overviewCtrl");
var twentytwenty = require('./directives/twentytwenty');

var app = angular.module('Prog5', ["PointyPony", "ui.router"]);

app.constant('appConfig', {
	courseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IlByb2c1Ig.Lbd5e9wYohfEPkA-t_DE4SJuIIrpyKQBwHiA73dpTXQ",
});

app.controller('overviewCtrl', overviewCtrl)
app.directive('twentytwenty', twentytwenty);
app.config(routesConfig);

//Initialize angular material styling with bootstrap
$.material.init();
},{"./config/routes":2,"./controllers/overviewCtrl":3,"./directives/twentytwenty":4}],2:[function(require,module,exports){
module.exports = function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('home');
    
    $stateProvider
        
        .state('home', { url: '/home',  templateUrl:'default/home.html' })
        .state('profile', { url: '/profile',  templateUrl:'default/profile.html' })
                
        .state('week1', { url: '/week1',  templateUrl:'week1/informatie.html', controller: 'overviewCtrl' })
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlcnMvb3ZlcnZpZXdDdHJsLmpzIiwiYXBwL2RpcmVjdGl2ZXMvdHdlbnR5dHdlbnR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHJcbnZhciByb3V0ZXNDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9yb3V0ZXMnKTtcclxudmFyIG92ZXJ2aWV3Q3RybCA9IHJlcXVpcmUoXCIuL2NvbnRyb2xsZXJzL292ZXJ2aWV3Q3RybFwiKTtcclxudmFyIHR3ZW50eXR3ZW50eSA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy90d2VudHl0d2VudHknKTtcclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnUHJvZzUnLCBbXCJQb2ludHlQb255XCIsIFwidWkucm91dGVyXCJdKTtcclxuXHJcbmFwcC5jb25zdGFudCgnYXBwQ29uZmlnJywge1xyXG5cdGNvdXJzZVRva2VuOiBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JbEJ5YjJjMUlnLkxiZDVlOXdZb2hmRVBrQS10X0RFNFNKdUlJcnB5S1FCd0hpQTczZHBUWFFcIixcclxufSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignb3ZlcnZpZXdDdHJsJywgb3ZlcnZpZXdDdHJsKVxyXG5hcHAuZGlyZWN0aXZlKCd0d2VudHl0d2VudHknLCB0d2VudHl0d2VudHkpO1xyXG5hcHAuY29uZmlnKHJvdXRlc0NvbmZpZyk7XHJcblxyXG4vL0luaXRpYWxpemUgYW5ndWxhciBtYXRlcmlhbCBzdHlsaW5nIHdpdGggYm9vdHN0cmFwXHJcbiQubWF0ZXJpYWwuaW5pdCgpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdob21lJyk7XHJcbiAgICBcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywgeyB1cmw6ICcvaG9tZScsICB0ZW1wbGF0ZVVybDonZGVmYXVsdC9ob21lLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwcm9maWxlJywgeyB1cmw6ICcvcHJvZmlsZScsICB0ZW1wbGF0ZVVybDonZGVmYXVsdC9wcm9maWxlLmh0bWwnIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWsxJywgeyB1cmw6ICcvd2VlazEnLCAgdGVtcGxhdGVVcmw6J3dlZWsxL2luZm9ybWF0aWUuaHRtbCcsIGNvbnRyb2xsZXI6ICdvdmVydmlld0N0cmwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMU9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMS9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9vcGRyYWNodGVuLmh0bWwnIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMicsIHsgdXJsOiAnL3dlZWsyJywgIHRlbXBsYXRlVXJsOid3ZWVrMi9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMk9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMi9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMi9vcGRyYWNodGVuLmh0bWwnIH0pO1xyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihkYXRhLCB0d28pe1xyXG5cdFx0JCgnI292ZXJ2aWV3JykuY3NzKCd0b3AnLCAgJCh0aGlzKS5zY3JvbGxUb3AoKSArIFwicHhcIik7XHJcblx0fSk7XHJcblx0XHJcblx0c2VsZi5zY3JvbGxUbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0XHRcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdWJNZW51T3BlbicsICBlbGVtZW50SWQpO1xyXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG5cdFx0XHJcblx0XHRpZihlbGVtZW50KXtcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJChlbGVtZW50KS5vZmZzZXQoKS50b3AgKyAtMTUwXHJcblx0XHQgICAgfSwgMTAwMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdHNlbGYuZ29UbyA9IGZ1bmN0aW9uKGVsZW1lbnRJZCl7XHJcblx0XHRcclxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuXHRcdFxyXG5cdFx0aWYoZWxlbWVudCl7XHJcblxyXG5cdFx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcCArIC0xNTBcclxuXHRcdCAgICB9LCAxMDApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxuXHR2YXIgbGFzdE9wZW5JZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdWJNZW51T3BlbicpO1xyXG5cdHNlbGYuZ29UbyhsYXN0T3BlbklkKTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiB7XHJcblx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHR0ZW1wbGF0ZTogXCI8ZGl2IGNsYXNzPSdyb3cnPjxkaXYgY2xhc3M9J2NvbC1tZC0xJz48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMTAnPjxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT48L2Rpdj48ZGl2IGNsYXNzPSdjb2wtbWQtMSc+PC9kaXY+PC9kaXY+XCIsXHJcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcblx0XHRcclxuXHRcdC8vTW9ldCBtZXQgdGltZW91dCBkYW5remlqIGJvb3RzdHJhcFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0JChlbGVtZW50KS5maW5kKCcud3JhcHBlcicpLnR3ZW50eXR3ZW50eSgpO1xyXG5cdFx0fSwgMzAwKTtcclxuXHRcdFxyXG5cdFx0XHRcclxuXHR9XHJcbiAgfTtcclxufTsiXX0=
