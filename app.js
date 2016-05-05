var application = angular.module('myapp',[]);

application.controller('mycontroller',function($scope){
	$scope.tasks=[];
 	$scope.searchEnter = function(){
 		// console.log(event.which || event.keyCode);
 		if(event.which == 13 && $scope.task != ""){
 			$scope.addTask();
 		}
 	};
 	$scope.addTask = function(){
 		$scope.tasks.push({'taskmessage':$scope.task, 'status': false});
 		console.log($scope.tasks);
 		$scope.task= '';

 	};
 	$scope.contentEdit = function (){
 		console.log('something');
 		event.target.contentEditable =event.target.contentEditable == "false" ? "true" : "false";
 		console.log(event.target.contentEditable);
 	};

});
