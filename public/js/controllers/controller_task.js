var app = angular.module('nombre_app', []);
app.controller("listworkCtrl", function($scope, listworkService) {


	listworkService.getAllTask()
		.then(function(data){
			$scope.getAllTask = data.data;
			console.log(JSON.stringify(data.data));
		})
		.catch(function(error){
			console.log(error);
	});

	$scope.postTask = function(task){
		listworkService.postTask(task)
		.then(function(data){
			$scope.getAllTask.push(data.data);
		})
		.catch(function(error){
			console.log(error);
		});
	};

	$scope.putTask = function(task, index){
		listworkService.putTask(task)
		.then(function(data){
			console.log(index);
			console.log(data.data);
			$scope.getAllTask[index] = data.data;
		})
		.catch(function(error){
			console.log(error);
		});
	};
});
