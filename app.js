(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var routesConfig = require('./config/routes');
var overviewCtrl = require("./controller/overviewCtrl");

var app = angular.module('Prog5', ["PointyPony"]);

app.constant('appConfig', {
	courseToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IlByb2c1Ig.Lbd5e9wYohfEPkA-t_DE4SJuIIrpyKQBwHiA73dpTXQ",
});

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
		console.log($(this).scrollTop());
		$('#overview').css('top',  $(this).scrollTop() + "px");
	});
	
	self.scrollTo = function(elementId){
	    $('html, body').animate({
	        scrollTop: $(elementId).offset().top + -150
	    }, 1000);
	};

}
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbmZpZy9yb3V0ZXMuanMiLCJhcHAvY29udHJvbGxlci9vdmVydmlld0N0cmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxyXG52YXIgcm91dGVzQ29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvcm91dGVzJyk7XHJcbnZhciBvdmVydmlld0N0cmwgPSByZXF1aXJlKFwiLi9jb250cm9sbGVyL292ZXJ2aWV3Q3RybFwiKTtcclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnUHJvZzUnLCBbXCJQb2ludHlQb255XCJdKTtcclxuXHJcbmFwcC5jb25zdGFudCgnYXBwQ29uZmlnJywge1xyXG5cdGNvdXJzZVRva2VuOiBcImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5JbEJ5YjJjMUlnLkxiZDVlOXdZb2hmRVBrQS10X0RFNFNKdUlJcnB5S1FCd0hpQTczZHBUWFFcIixcclxufSk7XHJcblxyXG5hcHAuY29uZmlnKHJvdXRlc0NvbmZpZyk7XHJcbmFwcC5jb250cm9sbGVyKCdvdmVydmlld0N0cmwnLCBvdmVydmlld0N0cmwpO1xyXG5cclxuLy9Jbml0aWFsaXplIGFuZ3VsYXIgbWF0ZXJpYWwgc3R5bGluZyB3aXRoIGJvb3RzdHJhcFxyXG4kLm1hdGVyaWFsLmluaXQoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuICAgIFxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnaG9tZScpO1xyXG4gICAgXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHsgdXJsOiAnL2hvbWUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvaG9tZS5odG1sJyB9KVxyXG4gICAgICAgIC5zdGF0ZSgncHJvZmlsZScsIHsgdXJsOiAnL3Byb2ZpbGUnLCAgdGVtcGxhdGVVcmw6J2RlZmF1bHQvcHJvZmlsZS5odG1sJyB9KVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMScsIHsgdXJsOiAnL3dlZWsxJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9pbmZvcm1hdGllLmh0bWwnIH0pXHJcbiAgICAgICAgLnN0YXRlKCd3ZWVrMU9wZHJhY2h0ZW4nLCB7IHVybDogJy93ZWVrMS9vcGRyYWNodGVuJywgIHRlbXBsYXRlVXJsOid3ZWVrMS9vcGRyYWNodGVuLmh0bWwnIH0pO1xyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSl7XHJcblx0dmFyIHNlbGYgPSAkc2NvcGU7XHJcblx0XHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihkYXRhLCB0d28pe1xyXG5cdFx0Y29uc29sZS5sb2coJCh0aGlzKS5zY3JvbGxUb3AoKSk7XHJcblx0XHQkKCcjb3ZlcnZpZXcnKS5jc3MoJ3RvcCcsICAkKHRoaXMpLnNjcm9sbFRvcCgpICsgXCJweFwiKTtcclxuXHR9KTtcclxuXHRcclxuXHRzZWxmLnNjcm9sbFRvID0gZnVuY3Rpb24oZWxlbWVudElkKXtcclxuXHQgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdCAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZW1lbnRJZCkub2Zmc2V0KCkudG9wICsgLTE1MFxyXG5cdCAgICB9LCAxMDAwKTtcclxuXHR9O1xyXG5cclxufSJdfQ==
