var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.static('public'));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"index.html");
});
<<<<<<< HEAD

app.get('/global/0', function (req, res) {
	fs.readFile('data/global.json', function (err, data) {
		if (!err) {
			res.send(data);
		}
	})
})
=======
app.get('/1', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"1.json");
});
app.get('/2', function (req,res){
    // res.send('你访问的首页');
    res.sendFile(__dirname+'/'+"2.json");
});
>>>>>>> b718722ad016531296a0e4867bed020dfb4e6234
// app.get('/login', function(req,res){
//     res.sendFile(__dirname+'/login.html');
// });
// app.get('/regist', function(req,res){
//     // res.send('你访问了注册页面')
//     res.sendFile(__dirname+'/regist.html');
// });

var server = app.listen(2046, function  () {
  // body...
  console.log(server.address().address, server.address().port, server.address().family);
})