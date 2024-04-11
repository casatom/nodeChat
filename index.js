const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

console.log("hello ");

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
  const status = {
    status: "Running",
    data:{
        status: '500',
        message: 'primer mensaje'
    }
  };

  response.send(status);
});
