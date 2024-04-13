const express = require('express')
const v1Routes = require('./routes/V1/router')
const v2Routes = require('./routes/V2/router')

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.use("/v1", v1Routes);
app.use("/v2", v2Routes);
