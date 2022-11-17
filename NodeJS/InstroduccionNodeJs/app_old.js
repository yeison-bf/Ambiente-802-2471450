const http = require("http");
const fs = require("fs");

fs.readFile("./public/views/home.html", (err, html) => {
  if (err) throw err;

  http
    .createServer((req, res) => {
      console.log(req);
      //res.writeHeader(200, { "Content-Type": "text/html" });
      // res.writeHead()
      res.write(html);
      res.end();
    })
    .listen(8081);
});

console.log("El servidor esta encendido en el pueto : http://localhost:8081");
