import { Server, OPEN } from 'ws';

const server = new WebSocket.Server({ port: 8080 });

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
    socket.onmessage = function (event) {
      const data = JSON.parse(event.data);

      switch (data.type) {
        case 'message':
          displayMessage(data.username, data.message, data.rating);
          break;
      }
    }
    function sendMessage() {
      const messageInput = document.getElementById('messageInput');
      const ratingInput = document.getElementById('ratingInput');
      const username = document.getElementById('username').value;
    
      // create a JSON message object
      const messageObject = {
        type: 'message',
        username: username,
        message: messageInput.value,
        rating: ratingInput.value
      };
    
      // send the JSON message object over the WebSocket connection
      socket.send(JSON.stringify(messageObject));
    
      // clear the input fields
      messageInput.value = '';
      ratingInput.value = '';
    }    
    function displayMessage(username, message, rating) {
      const messagesContainer = document.getElementById('messagesContainer');
      
      // create a new message element
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
    
      // add the message content
      const usernameElement = document.createElement('span');
      usernameElement.classList.add('username');
      usernameElement.textContent = username;
    
      const messageTextElement = document.createElement('span');
      messageTextElement.classList.add('message-text');
      messageTextElement.textContent = message;
    
      const ratingElement = document.createElement('span');
      ratingElement.classList.add('rating');
      ratingElement.textContent = rating;
    
      messageElement.appendChild(usernameElement);
      messageElement.appendChild(messageTextElement);
      messageElement.appendChild(ratingElement);
    
      messagesContainer.appendChild(messageElement);
    }
    
