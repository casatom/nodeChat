const express = require('express')
const server = require('./server')

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

console.log("hello ");
server.loggear(2,3)

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    status: "Running",
    data:{
        status: '500',
        message: 'segundo mensaje'
    }
  };

  response.send(status);
});
