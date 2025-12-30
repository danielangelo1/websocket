import WebSocket from "ws";

const port = 8080;
const ws = new WebSocket(`ws://localhost:${port}`);

ws.on("open", () => {
  console.log("Client connected");
  ws.send("Hello, im the client :)");
});

ws.on("message", (data) => {
  console.log(`Recieved a message form server: ${data}`);
});
