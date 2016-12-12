app.controller('formsController', function($scope){
	angular.element('body').on('shown.bs.modal', '.bs-example-modal-lg', function(){
	    var attribute = angular.element(this).find('.amount').attr('value');
	    angular.element(this).find('.amount').prop('value', attribute);
	});
});