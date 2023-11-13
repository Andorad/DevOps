"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PING_LISTEN_PORT = 8080;
const server = http_1.default.createServer((req, res) => {
    if (req.url === '/ping') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers, null, 2));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end();
    }
});
server.listen(PING_LISTEN_PORT, () => {
    console.log(`Server is listening at http://localhost:${PING_LISTEN_PORT}`);
});
