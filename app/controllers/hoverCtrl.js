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