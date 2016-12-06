app.factory("incomeFactory", function($http){
    delete list;
    var d = "",
        factory = {},
        list = [];
    factory.getFixedList =  function(data){
        $http({
            method: 'POST',
            url: '/data/income.json'
        }).then(function successCallback(response) {
            d = response.data.fixedIncome;
            if(list.length == 0){
                for(var x in d){
                    list.push(d[x]);
                }
            }
            return list;
        }, function errorCallback(response) {
            d = response;
            return d
        });
        return list;
    }
    return factory;
});