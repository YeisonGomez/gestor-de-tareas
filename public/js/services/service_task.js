app.service("listworkService", function($http){
var api_url = 'http://localhost:8080';

return {

	postTask: function(task){
    	return $http.post(api_url+"/post-task", {task: task});
	}, 

	getAllTask: function(){
		return $http.get(api_url+"/get-all");
	},

	putTask: function(task){
		return $http.put(api_url+"/put-task", {task: task});
	},

	deleteTask: function(id){
		return $http.delete(api_url+"/get-all/"+id);
	}

};

});
