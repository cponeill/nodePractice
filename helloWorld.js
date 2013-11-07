var connect = require('connect');

function hello(request, response, next) {
  response.writeHeader({'Content-Type', 'text/plain'});
  response.end('Hello World\n');
  next();
}

var app = connect()
  .use(hello)
  .listen(3000)
  
console.log('Launching on port 3000');
