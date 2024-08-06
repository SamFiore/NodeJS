const http = require('http');

http.createServer((req,res) => {

    if(req.url === '/'){
        res.write('Welcome to the server')
        return res.end()
    }

    if(req.url === '/about' ){
        res.write('Acerca de...')
        return res.end()
    }

    res.write('Not found');
    res.end()
}).listen(3000);

console.log('Servidos escuchando en el puerto 3000')