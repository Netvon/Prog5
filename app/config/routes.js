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