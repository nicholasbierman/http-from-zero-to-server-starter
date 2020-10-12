const http = require("http");

http
  .createServer(function (request, response) {
    switch (request.url) {
      case "/OK":
        response.writeHead(200, { 'Content-Type': 'text/html' });
        console.log("Inbound 'OK' request being processed...");
        response.end();
        break;

      case "/Not-Found":
        response.writeHead(404);
        console.log("404 error! Resource not found");
        response.end();
        break;

      case "/Bad-Request":
        response.writeHead(400);
        console.log(
          "Bad request...the server could not understand the request due to invalid syntax"
        );
        response.end();
        break;

      case "/Created":
        response.writeHead(201);
        console.log(
          "The request has succeeded and a new resource has been created as a result"
        );
        response.end();
        break;

      case "/Forbidden":
        response.writeHead(403);
        console.log("The client does not have access rights to the content");
        response.end();
        break;

      case "/Found":
        response.writeHead(302);
        console.log(
          "The URL of the requested resource has been changed temporarily."
        );
        response.end();
        break;

      case "/Gateway-Timeout":
        response.writeHead(504);
        console.log(
          "Gateway timeout. This error response is given when the server is acting as a gateway and cannot get a response in time"
        );
        response.end();
        break;

      case "/Internal-Server-Error":
        response.writeHead(500);
        console.log(
          "The server has encountered a situation it doesn't know how to handle"
        );
        response.end();
        break;

      case "/Moved-Permanently":
        response.writeHead(301);
        console.log(
          "The URL of the requested resource has been changed permanently"
        );
        response.end();
        break;

      case "/Unauthorized":
        response.writeHead(401);
        console.log(
          "The client must authenticate itself to get the requested response"
        );
        response.end();
        break;

      default:
        response.end();
    }
  })
  .listen(3000, function () {
    console.log(`Listening on port 3000...`);
  });
