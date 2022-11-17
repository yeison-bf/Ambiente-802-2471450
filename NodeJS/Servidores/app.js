

const http = require('http');
fs = require('fs');

fs.readFile('src/views/home.html',(err, html)=>{
    if (err) {
        throw err; 
    }   

    http.createServer( (request, response)=>{

        console.log(request)
        if(request.url === '/home'){
            response.writeHeader(200, {"Content-Type": "text/html"});  
            response.write(html);  
            response.end(); 
        }else{
            response.write("Aún no")
        }
        response.end();
    })
    .listen(8090);

})


console.log("Estoy activo")
    
