console.log("I am a Node program");

var http = require("http");
var dt = require("./myfirstmodule");
var fs = require("fs");
var url = require("url");

http
  .createServer(function(req, res) {
    var q = url.parse(req.url, true);
    console.log("path is "+q.pathname);
    if(q.pathname == "/"){
      q.pathname = "/index";
    }
    console.log("path is now "+q.pathname);    
    var filename = "." + q.pathname + ".html";
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("The date and time are currently: " + dt.myDateTime() + "\r\n");
      res.write(req.url);
      res.write(data);
      res.end("Hello World!");
    });
  })
  .listen(8000);
