import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello Railway");
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
