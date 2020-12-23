const http = require('http');
const server = http.createServer(function(request, response){
    response.writeHead(200, {message:'Hola :)'});
    response.write('<html><body>Hola :)</body></html>');
    response.end();
});

server.listen(8080, ()=> console.log('Servidor en ejecucion...'));