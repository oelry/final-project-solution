
app.controller('myPhoneBookCtrl', function($scope, phoneBookService){
	$scope.contacts = phoneBookService.getContacts();
	$scope.orderByBtn = function(){
		if($scope.alpha == 'a-z'){
			$scope.alpha = 'z-a';
		}
		else{
			$scope.alpha = 'a-z';
		}
	};
});