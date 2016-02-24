var express     = require('express'),
	bodyParser  = require('body-parser'),
	cors        = require('cors');

var server      = express();
 	server.use(bodyParser.urlencoded({ extended: false }))
   	server.use(bodyParser.json())
   	server.use(cors()) 

var task = [
{
	id: 1,
	detail: "Primera Tarea",
	subject: "Primer Asunto"
},
{
	id: 2,
	detail: "Segunda Tarea",
	subject: "Segunda Asunto"
}
]

server.get('/get-all', function(req, res){
	res.json(task);
});

server.post('/post-task', function(req, res){
	var taskReq = req.body.task;
	taskReq = {
		id: task.length+1,
		detail: taskReq.detail,
		subject: taskReq.subject
	}

	if (task.length == 0) {
		task[0] = taskReq;
	}else{
		task.push(taskReq);
	}

	res.json(taskReq);
});

server.put('/put-task', function(req, res){
	var taskReq = req.body.task;
	
	task[taskReq.id-1] = taskReq;
	console.log(taskReq);
	res.json(taskReq);
});

server.delete('/delete-task/:id', function(req, res){
	var id = req.params.id;
	
});


console.log("Servidor Corriendo");


server.listen(8080);
