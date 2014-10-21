angular.module('myapp',[]).controller('waitStaffCtrl', function($scope){

$scope.tipTotal= 0;
$scope.mealCnt= 0;
	$scope.mealDetailsSubmit=function(){
       
       var tax = ($scope.mealPrice*$scope.taxRate)/100;
       $scope.subTotal= $scope.mealPrice+tax;
       $scope.tip = ($scope.mealPrice*$scope.tipPercent)/100;
       
       $scope.total= $scope.subTotal+$scope.tip ;
		
		$scope.tipTotal= $scope.tip +$scope.tipTotal;
		$scope.mealCnt= $scope.mealCnt+1;
		$scope.average = $scope.tipTotal/$scope.mealCnt;

	}

	$scope.cancelSubmit=function(){
     $scope.mealPrice=null;
     $scope.taxRate=null;
     $scope.tipPercent=null;
	}	

	$scope.resetAll=function(){
	
	$scope.cancelSubmit();
    $scope.subTotal= null;
    $scope.tip = null;
    $scope.total= null ;
	$scope.tipTotal= null;
	$scope.mealCnt=null;
	$scope.average = null;
	}	

});