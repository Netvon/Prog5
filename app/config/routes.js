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