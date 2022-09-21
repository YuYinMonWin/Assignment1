const http = require('http')
const fs = require('fs')
const port = 9050

const sever = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        } res.end()
    })

})

sever.listen(port, function(error){
    if(error){
        console.log('Something went worng', error)
    }else{
        console.log('Something is listening on port'+ port)
    }
})

