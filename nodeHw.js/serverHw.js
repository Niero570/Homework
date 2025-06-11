const http = require('http');
const PORT = 3000;
const fs = require('fs')
    const server =http.createServer((req,res) =>{
        console.log(req.url, req.method)

        res.setHeader('Content_Type','text/html');
       
         let path = './views/';
         switch(req.url){
            case '/':
                path += 'index.html';
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;

                break;
                case '/about-me':
                    path += 'about.html';
                    res.setHeader('Location', '/about')
                    res.statusCode = 301;
                    res.end();
    
                    break;
                default:
                
                    path += '404.html';
                    res.statusCode = 400;
                    break;
         }

         fs.readFile(path, (err,data) =>{
            if(err){
                console.log(err);
                res.end();
            } else{
                res.write(data);
                res.end();
            }
    })
    })

    server.listen(PORT, 'localhost', () =>{
        console.log(`listening for requests on port ${PORT}`)
    })


