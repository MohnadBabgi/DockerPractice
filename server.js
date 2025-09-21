
import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end("<h1> Welcome to the Home Page</h1><p>Go to <a href='/about'>About</a></p>");
    } else if (req.url === "/about") {
        res.end("<h1> About Page</h1><p>This is a simple Node.js server example.</p>");
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
