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