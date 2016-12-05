app.factory("incomeFactory", function($http){
    var d = "",
        factory = {},
        list = [];
    factory.getFixedList =  function(data){
        $http({
            method: 'POST',
            url: '/data/income.json'
        }).then(function successCallback(response) {
            d = response.data.fixed;
            for(var x in d){
                list.push(d[x]);
            }
            return list;
        }, function errorCallback(response) {
            d = response;
            return d
        });
        return list;
    }
    factory.service = function(){
        $http({
            method: 'POST',
            url: '/data/income.json'
        }).then(function successCallback(response) {
            d = response.data.fixed;
            for(var x in d){
                list.push(d[x]);
            }
            return list;
        }, function errorCallback(response) {
            d = response;
            return d
        });
    }
    return factory;
});