(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');
var overviewCtrl = require("./controllers/overviewCtrl");
var twentytwenty = require('./directives/twentytwenty');
var codexamp = require('./directives/codexamp');

var app = angular.module('Prog5', ["PointyPony", "ui.router"]);

app.constant('appConfig', {
	courseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IlByb2c1Ig.Lbd5e9wYohfEPkA-t_DE4SJuIIrpyKQBwHiA73dpTXQ",
});

app.controller('overviewCtrl', overviewCtrl)
app.directive('twentytwenty', twentytwenty);
app.directive('codexamp', codexamp);
app.config(routesConfig);

//Initialize angular material styling with bootstrap
$.material.init();
},{"./config/routes":2,"./controllers/overviewCtrl":3,"./directives/codexamp":4,"./directives/twentytwenty":5}],2:[function(require,module,exports){
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
	template: "<div class='codexamp'><div class='window ng-transclude'></div>",
	link: function(scope, element){
		
	
			
	}
  };
};
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlcnMvb3ZlcnZpZXdDdHJsLmpzIiwiYXBwL2RpcmVjdGl2ZXMvY29kZXhhbXAuanMiLCJhcHAvZGlyZWN0aXZlcy90d2VudHl0d2VudHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxudmFyIHJvdXRlc0NvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnL3JvdXRlcycpO1xyXG52YXIgb3ZlcnZpZXdDdHJsID0gcmVxdWlyZShcIi4vY29udHJvbGxlcnMvb3ZlcnZpZXdDdHJsXCIpO1xyXG52YXIgdHdlbnR5dHdlbnR5ID0gcmVxdWlyZSgnLi9kaXJlY3RpdmVzL3R3ZW50eXR3ZW50eScpO1xyXG52YXIgY29kZXhhbXAgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvY29kZXhhbXAnKTtcclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnUHJvZzUnLCBbXCJQb2ludHlQb255XCIsIFwidWkucm91dGVyXCJdKTtcclxuXHJcbmFwcC5jb25zdGFudCgnYXBwQ29uZmlnJywge1xyXG5cdGNvdXJzZVRva2VuOiBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JbEJ5YjJjMUlnLkxiZDVlOXdZb2hmRVBrQS10X0RFNFNKdUlJcnB5S1FCd0hpQTczZHBUWFFcIixcclxufSk7XHJcblxyXG5hcHAuY29udHJvbGxlcignb3ZlcnZpZXdDdHJsJywgb3ZlcnZpZXdDdHJsKVxyXG5hcHAuZGlyZWN0aXZlKCd0d2VudHl0d2VudHknLCB0d2VudHl0d2VudHkpO1xyXG5hcHAuZGlyZWN0aXZlKCdjb2RleGFtcCcsIGNvZGV4YW1wKTtcclxuYXBwLmNvbmZpZyhyb3V0ZXNDb25maWcpO1xyXG5cclxuLy9Jbml0aWFsaXplIGFuZ3VsYXIgbWF0ZXJpYWwgc3R5bGluZyB3aXRoIGJvb3RzdHJhcFxyXG4kLm1hdGVyaWFsLmluaXQoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgIFxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnaG9tZScpO1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHsgdXJsOiAnL2hvbWUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvaG9tZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHsgdXJsOiAnL3Byb2ZpbGUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvcHJvZmlsZS5odG1sJyB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMScsIHsgdXJsOiAnL3dlZWsxJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9pbmZvcm1hdGllLmh0bWwnLCBjb250cm9sbGVyOiAnb3ZlcnZpZXdDdHJsJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazFPcGRyYWNodGVuJywgeyB1cmw6ICcvd2VlazEvb3BkcmFjaHRlbicsICB0ZW1wbGF0ZVVybDond2VlazEvb3BkcmFjaHRlbi5odG1sJyB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazInLCB7IHVybDogJy93ZWVrMicsICB0ZW1wbGF0ZVVybDond2VlazIvaW5mb3JtYXRpZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazJPcGRyYWNodGVuJywgeyB1cmw6ICcvd2VlazIvb3BkcmFjaHRlbicsICB0ZW1wbGF0ZVVybDond2VlazIvb3BkcmFjaHRlbi5odG1sJyB9KTtcclxuICAgXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc2NvcGUpe1xyXG5cdHZhciBzZWxmID0gJHNjb3BlO1xyXG5cdFxyXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oZGF0YSwgdHdvKXtcclxuXHRcdCQoJyNvdmVydmlldycpLmNzcygndG9wJywgICQodGhpcykuc2Nyb2xsVG9wKCkgKyBcInB4XCIpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHNlbGYuc2Nyb2xsVG8gPSBmdW5jdGlvbihlbGVtZW50SWQpe1xyXG5cdFx0XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3ViTWVudU9wZW4nLCAgZWxlbWVudElkKTtcclxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuXHRcdFxyXG5cdFx0aWYoZWxlbWVudCl7XHJcblx0XHRcdFxyXG5cdFx0XHJcblx0XHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wICsgLTE1MFxyXG5cdFx0ICAgIH0sIDEwMDApO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHRzZWxmLmdvVG8gPSBmdW5jdGlvbihlbGVtZW50SWQpe1xyXG5cdFx0XHJcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcblx0XHRcclxuXHRcdGlmKGVsZW1lbnQpe1xyXG5cclxuXHRcdCAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHQgICAgICAgIHNjcm9sbFRvcDogJChlbGVtZW50KS5vZmZzZXQoKS50b3AgKyAtMTUwXHJcblx0XHQgICAgfSwgMTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0XHJcblx0dmFyIGxhc3RPcGVuSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViTWVudU9wZW4nKTtcclxuXHRzZWxmLmdvVG8obGFzdE9wZW5JZCk7XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4ge1xyXG5cdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0dGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0nY29kZXhhbXAnPjxkaXYgY2xhc3M9J3dpbmRvdyBuZy10cmFuc2NsdWRlJz48L2Rpdj5cIixcclxuXHRsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCl7XHJcblx0XHRcclxuXHRcclxuXHRcdFx0XHJcblx0fVxyXG4gIH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4ge1xyXG5cdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0dGVtcGxhdGU6IFwiPGRpdiBjbGFzcz0ncm93Jz48ZGl2IGNsYXNzPSdjb2wtbWQtMSc+PC9kaXY+PGRpdiBjbGFzcz0nY29sLW1kLTEwJz48bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+PC9kaXY+PGRpdiBjbGFzcz0nY29sLW1kLTEnPjwvZGl2PjwvZGl2PlwiLFxyXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpe1xyXG5cdFx0XHJcblx0XHQvL01vZXQgbWV0IHRpbWVvdXQgZGFua3ppaiBib290c3RyYXBcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoZWxlbWVudCkuZmluZCgnLndyYXBwZXInKS50d2VudHl0d2VudHkoKTtcclxuXHRcdH0sIDMwMCk7XHJcblx0XHRcclxuXHRcdFx0XHJcblx0fVxyXG4gIH07XHJcbn07Il19
