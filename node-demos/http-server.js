const http = require("http");

const books = ["Wings of Fire", "Atomic Habits", "The Alchemist"];

const server = http.createServer((req, res) => {
  console.log(req.method + " " + req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to BookShelf</h1>");
  } else if (req.url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});