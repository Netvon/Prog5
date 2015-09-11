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
        .state('leaderboards', { url: '/leaderboards',  templateUrl:'default/leaderboards.html' })
        .state('pullrequest', { url: '/pullrequest',  templateUrl:'default/pullrequest.html' })
        .state('punten', { url: '/Avanspunten',  templateUrl:'default/Avanspunten.html' })
                
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlcnMvaG92ZXJDdHJsLmpzIiwiYXBwL2NvbnRyb2xsZXJzL292ZXJ2aWV3Q3RybC5qcyIsImFwcC9kaXJlY3RpdmVzL3R3ZW50eXR3ZW50eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgcm91dGVzQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzJyk7XHJcbnZhciBvdmVydmlld0N0cmwgPSByZXF1aXJlKFwiLi9jb250cm9sbGVycy9vdmVydmlld0N0cmxcIik7XHJcbnZhciB0d2VudHl0d2VudHkgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvdHdlbnR5dHdlbnR5Jyk7XHJcbnZhciBob3ZlckN0cmw9IHJlcXVpcmUoJy4vY29udHJvbGxlcnMvaG92ZXJDdHJsJyk7XHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1Byb2c1JywgW1wiUG9pbnR5UG9ueVwiLCBcInVpLnJvdXRlclwiLCBcIm5nQW5pbWF0ZVwiXSk7XHJcblxyXG5hcHAuY29uc3RhbnQoJ2FwcENvbmZpZycsIHtcclxuXHRjb3Vyc2VUb2tlbjogXCJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuSWxCeWIyYzFJZy5MYmQ1ZTl3WW9oZkVQa0EtdF9ERTRTSnVJSXJweUtRQndIaUE3M2RwVFhRXCIsXHJcbn0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ2hvdmVyQ3RybCcsIGhvdmVyQ3RybCk7XHJcbmFwcC5jb250cm9sbGVyKCdvdmVydmlld0N0cmwnLCBvdmVydmlld0N0cmwpO1xyXG5hcHAuZGlyZWN0aXZlKCd0d2VudHl0d2VudHknLCB0d2VudHl0d2VudHkpO1xyXG5hcHAuY29uZmlnKHJvdXRlc0NvbmZpZyk7XHJcblxyXG4vL0luaXRpYWxpemUgYW5ndWxhciBtYXRlcmlhbCBzdHlsaW5nIHdpdGggYm9vdHN0cmFwXHJcbiQubWF0ZXJpYWwuaW5pdCgpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCdob21lJyk7XHJcbiAgICBcclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCdob21lJywgeyB1cmw6ICcvaG9tZT9zZWN0aW9uJywgIHRlbXBsYXRlVXJsOidkZWZhdWx0L2hvbWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3Byb2ZpbGUnLCB7IHVybDogJy9wcm9maWxlJywgIHRlbXBsYXRlVXJsOidkZWZhdWx0L3Byb2ZpbGUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ2xlYWRlcmJvYXJkcycsIHsgdXJsOiAnL2xlYWRlcmJvYXJkcycsICB0ZW1wbGF0ZVVybDonZGVmYXVsdC9sZWFkZXJib2FyZHMuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3B1bGxyZXF1ZXN0JywgeyB1cmw6ICcvcHVsbHJlcXVlc3QnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvcHVsbHJlcXVlc3QuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3B1bnRlbicsIHsgdXJsOiAnL0F2YW5zcHVudGVuJywgIHRlbXBsYXRlVXJsOidkZWZhdWx0L0F2YW5zcHVudGVuLmh0bWwnIH0pXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWsxJywgeyB1cmw6ICcvd2VlazE/c2VjdGlvbicsICB0ZW1wbGF0ZVVybDond2VlazEvaW5mb3JtYXRpZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazFPcGRyYWNodGVuJywgeyB1cmw6ICcvd2VlazEvb3BkcmFjaHRlbicsICB0ZW1wbGF0ZVVybDond2VlazEvb3BkcmFjaHRlbi5odG1sJyB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazInLCB7IHVybDogJy93ZWVrMicsICB0ZW1wbGF0ZVVybDond2VlazIvaW5mb3JtYXRpZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazJPcGRyYWNodGVuJywgeyB1cmw6ICcvd2VlazIvb3BkcmFjaHRlbicsICB0ZW1wbGF0ZVVybDond2VlazIvb3BkcmFjaHRlbi5odG1sJyB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnd2VlazNhJywgeyB1cmw6ICcvd2VlazMvaW50cm9kdWN0aWUnLCAgdGVtcGxhdGVVcmw6J3dlZWszL2luZm9ybWF0aWVfaW50cm8uaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWszYicsIHsgdXJsOiAnL3dlZWszL3dwZmJhc2ljcycsICB0ZW1wbGF0ZVVybDond2VlazMvaW5mb3JtYXRpZV9iYXNpY3MuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWszT3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWszL29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWszL29wZHJhY2h0ZW4uaHRtbCcgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWs0JywgeyB1cmw6ICcvd2VlazQnLCAgdGVtcGxhdGVVcmw6J3dlZWs0L2luZm9ybWF0aWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWs0T3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWs0L29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWs0L29wZHJhY2h0ZW4uaHRtbCcgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWs1JywgeyB1cmw6ICcvd2VlazUnLCAgdGVtcGxhdGVVcmw6J3dlZWs1L2luZm9ybWF0aWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWs1T3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWs1L29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWs1L29wZHJhY2h0ZW4uaHRtbCcgfSlcclxuICAgICAgICBcclxuICAgICAgICAuc3RhdGUoJ3dlZWs2JywgeyB1cmw6ICcvd2VlazYnLCAgdGVtcGxhdGVVcmw6J3dlZWs2L2luZm9ybWF0aWUuaHRtbCcgfSlcclxuICAgICAgICAuc3RhdGUoJ3dlZWs2T3BkcmFjaHRlbicsIHsgdXJsOiAnL3dlZWs2L29wZHJhY2h0ZW4nLCAgdGVtcGxhdGVVcmw6J3dlZWs2L29wZHJhY2h0ZW4uaHRtbCcgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHNjb3BlKXtcclxuXHR2YXIgc2VsZiA9ICRzY29wZTtcclxuXHRcclxuXHR2YXIgZW5hYmxlID0gZmFsc2U7XHJcblx0c2VsZi5pc1Nob3dpbmcgPSBmYWxzZTtcclxuXHRcclxuXHRcclxuXHRzZWxmLnNob3cgPSBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIWVuYWJsZSk7XHJcblx0XHRzZWxmLmlzU2hvd2luZyA9IHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdHNlbGYuaGlkZSA9IGZ1bmN0aW9uKCl7XHJcblx0XHRpZighZW5hYmxlKVxyXG5cdFx0c2VsZi5pc1Nob3dpbmcgPSBmYWxzZTtcclxuXHR9XHJcblx0XHJcblx0c2VsZi50b2dnbGUgPSBmdW5jdGlvbigpe1xyXG5cdFx0ZW5hYmxlID0gIWVuYWJsZTtcclxuXHRcdHNlbGYuaXNTaG93aW5nID0gZW5hYmxlO1xyXG5cdH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHNjb3BlKXtcclxuXHR2YXIgc2VsZiA9ICRzY29wZTtcclxuXHRcclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGRhdGEsIHR3byl7XHJcblx0XHQkKCcjb3ZlcnZpZXcnKS5jc3MoJ3RvcCcsICAkKHRoaXMpLnNjcm9sbFRvcCgpICsgXCJweFwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRzZWxmLnNjcm9sbFRvID0gZnVuY3Rpb24oZWxlbWVudElkKXtcclxuXHRcdFxyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N1Yk1lbnVPcGVuJywgIGVsZW1lbnRJZCk7XHJcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcblx0XHRcclxuXHRcdGlmKGVsZW1lbnQpe1xyXG5cdFx0XHRcclxuXHRcdFxyXG5cdFx0ICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZW1lbnQpLm9mZnNldCgpLnRvcCArIC0xNTBcclxuXHRcdCAgICB9LCAxMDAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0c2VsZi5nb1RvID0gZnVuY3Rpb24oZWxlbWVudElkKXtcclxuXHRcdFxyXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG5cdFx0XHJcblx0XHRpZihlbGVtZW50KXtcclxuXHJcblx0XHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0ICAgICAgICBzY3JvbGxUb3A6ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wICsgLTE1MFxyXG5cdFx0ICAgIH0sIDEwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdHZhciBsYXN0T3BlbklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1Yk1lbnVPcGVuJyk7XHJcblx0c2VsZi5nb1RvKGxhc3RPcGVuSWQpO1xyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIHtcclxuXHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdHRlbXBsYXRlOiBcIjxkaXYgY2xhc3M9J3Jvdyc+PGRpdiBjbGFzcz0nY29sLW1kLTEnPjwvZGl2PjxkaXYgY2xhc3M9J2NvbC1tZC0xMCc+PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPjwvZGl2PjxkaXYgY2xhc3M9J2NvbC1tZC0xJz48L2Rpdj48L2Rpdj5cIixcclxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KXtcclxuXHRcdFxyXG5cdFx0Ly9Nb2V0IG1ldCB0aW1lb3V0IGRhbmt6aWogYm9vdHN0cmFwXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKGVsZW1lbnQpLmZpbmQoJy53cmFwcGVyJykudHdlbnR5dHdlbnR5KCk7XHJcblx0XHR9LCAzMDApO1xyXG5cdFx0XHJcblx0XHRcdFxyXG5cdH1cclxuICB9O1xyXG59OyJdfQ==
