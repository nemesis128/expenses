app.controller("incomeController", function($scope, incomeFactory, $location){
    delete $scope.infixedList;
    $scope.infixedList = incomeFactory.getFixedList();
    $scope.refresh = function(){
        location.reload();
    };
    $scope.fixedIncomeView = function(id){
        //console.log(angular.element(event.target).data('id'));
    };
    $scope.current = function(id){
        for(var x in $scope.infixedList){
            if(x == id){
                $scope.currentItem = $scope.infixedList[id];
                //console.log($scope.currentItem);
            }
        }
    };
});