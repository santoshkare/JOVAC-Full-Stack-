import http from 'http';
import { join } from 'path';
import { parse } from 'url';
import { readFile } from 'fs';
    
const server = http.createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const path = parsedUrl.pathname;

    if (path === '/') {
        const filePath = join(process.cwd(), 'pages', 'home.html');
        readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (path === '/about') {
        const filePath = join(process.cwd(), 'pages', 'about.html');
        readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
