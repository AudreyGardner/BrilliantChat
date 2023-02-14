import { Server, OPEN } from 'ws';

const server = new WebSocket.Server({ port: 3000 });

function handleMessage(socket, message) {
    // broadcast the message to all connected clients
    server.clients.forEach((client) => {
      if (client.readyState === OPEN) {
        client.send(message);
      }
    });
  }
  
  server.on('connection', (socket) => {
    socket.on('message', (message) => {
      handleMessage(socket, message);
    });
  });
  
  
  
  