var http = require('http');



var handleRequest = function(req,res){
    console.log('url is ',req.url);
    res.write('hello from request');
    res.end();
};

var server = http.createServer(handleRequest);

server.listen(3000,function(){
    console.log('server running on port 3000');
});

