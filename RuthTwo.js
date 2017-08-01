var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

function handleOne (request, response){
  response.end("Hello, There Server One: " + request.url);
}

function handleTwo (request, response){
  response.end("Hello, There Server Two: " + request.url);
}

var serverOne = http.createServer(handleOne);
var serverTwo = http.createServer(handleTwo);

serverOne.listen(PORTONE, function(){
  console.log("Hello Server 1");
});

serverTwo.listen(PORTTWO, function(){
  console.log("Hello Server 2");
});
