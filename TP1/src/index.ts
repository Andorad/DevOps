import http from 'http';

const PING_LISTEN_PORT = process.env.PING_LISTEN_PORT ?? 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(req.headers, null, 2));
  }
  else
  {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
  }
});

server.listen(PING_LISTEN_PORT, () => {
  console.log(`Server is listening at http://localhost:${PING_LISTEN_PORT}`);
});