// node

const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET') {
	if (url === '/') {
	    fs.readFile('./index.html', (err, data) => {
		res.setHeader('Content-Type', 'text/html');
		res.end(data);
	    });
	} else if (url === '/style.css') {
	    fs.readFile('./style.css', (err, data) => {
		res.setHeader('Content-Type', 'text/css');
		res.end(data);
	    });
	} else if (url === '/script.js') {
	    fs.readFile('./script.js', (err, data) => {
		res.setHeader('Content-Type', 'text/javascript');
		res.end(data);
	    });
	}
      // ako url pocinje sa '/slike/' onda ucitati url kao putanju slike u fs.readFile()
      else if (url.search(/\/slike\//) == 0) {
	fs.readFile(`.${url}`, (err, data) => {
	  res.setHeader('Content-Type', 'image/png');
	  res.end(data);
	});
      }
    }
});

server.listen(3200);
