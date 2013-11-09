var connect = require('connect');

function logger(request, response, next) {
  console.log('%s %s', request.method, request.url);
  next();
}

function hello(request, response) {
  response.writeHeader(200, {'Content-Type', 'text/plain'});
  response.end('Hello World\n');
  response.end();
}

var app = connect()
  .use(logger)
  .use(hello)
  
app.listen(3000)
console.log('This web application is launching on port 3000');
