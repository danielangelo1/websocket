// https://www.npmjs.com/package/ws
import { WebSocketServer } from "ws";

const port = 8080;
const wss = new WebSocketServer({ port });

wss.on("connection", (ws) => {
  // handles new connections

  ws.on("message", (data) => {
    console.log(`Receive message from: ${data}`);
  });

  ws.send(`Hello, this is server.ts!`);
});

console.log(`Server listening at port: ${port}`);
