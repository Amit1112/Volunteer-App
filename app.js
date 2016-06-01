var app = angular.module('myapp',['ngMaterial','ngMessages']);

app.controller('mainCtrl',['$scope','$log',function($scope,$log){
        
    $scope.states = ('HP MP J&K CH AP DL MH CG UP UTK HR PN').split(' ').map(function(state) {
        return {abbrev: state};
    });
    $scope.skills=["Certified Plumber","Certified Electrician","First AID Course","College Graduate","Other"];
    $scope.user = {
        firstName : "",
        lastName : "",
        gender :"",
        submissionDate : "",
        address: "",
        address2: "",
        city : "",
        state : "",
        postalCode:"",
        biography:"",
        skills: []
    };
    $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };
    
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    
    $scope.submit = function(){
        $log.info($scope.user.firstName);
        $log.info($scope.user.lastName);
        $log.info($scope.user.gender);
        $log.info($scope.user.submissionDate);
        $log.info($scope.user.address);
        $log.info($scope.user.address2);
        $log.info($scope.user.submissionDate);
        $log.info($scope.user.city);
        $log.info($scope.user.state);
        $log.info($scope.user.postalCode);
        $log.info($scope.user.biography);
        $log.info($scope.user.skills);
    };
}]);

/*app.config(['$routeProvider',function($routeProvider){
    
    $routeProvider.
      	when('/joinus', {templateUrl: 'templates/form.html', controller: 'mainCtrl'}).
        otherwise({redirectTo: '/'});
}]);*/
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange').dark();
});
