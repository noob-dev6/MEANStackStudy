// index.js

var express = require('express'); // 설치한 express module을 불러와서 변수 express에 담습니다
var app = express(); // express를 실행하여 app object를 초기화 합니다.

app.use(express.static(__dirname + '/public'));

/*
 * For Hello World!
app.get('/', function(req, res) { // '/' 위치에 'get' 요청을 받는 경ㅇ,
	res.send('Hello World!');
});
*/

app.listen(12345, function() { // 12345번 포트를 사용합니다.
	console.log('Server On!');
});
