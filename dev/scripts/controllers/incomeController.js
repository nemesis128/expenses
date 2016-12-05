app.controller("incomeController", function($scope, incomeFactory){
    $scope.infixedList = incomeFactory.getFixedList();
    $scope.refresh = function(){
        location.reload();
    };
    $scope.fixedSpendingView = function(id){
        console.log(angular.element(event.target).data('id'));
    };
});