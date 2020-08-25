const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`app is running here:http://local:${port}`)
});

app.get('/', (request, response) => {
  console.log('Request: /');
  response.sendFile(__dirname + '/index.html');
});