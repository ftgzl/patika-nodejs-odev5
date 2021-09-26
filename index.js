const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url

  if(url === "/" || url === "/index"){
    res.writeHead(200, {"Content-Type": 'text/html'})
    res.write('<h2>index page</h2')
  }

  else if(url === "/about"){
    res.writeHead(200, {contentType: 'text/html'})
    res.write('<h2>about page</h2')
  }

  else if(url === "/contact"){
    res.writeHead(200, {contentType: 'text/html'})
    res.write('<h2>contact page</h2')
  }

  else{
    res.writeHead(404, {contentType: 'text/html'})
    res.write('<h2>404</h2')
  }
  res.end()
})


server.listen(port, (err, result) => {
  console.error(err)
})