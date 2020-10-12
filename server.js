const http = require('http');

http.createServer(function(request, response) {
     response.end();
}).listen(3030, function() {
     console.log(`Listening on port 3030...`);
})
