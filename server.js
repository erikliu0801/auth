const express = require('express');
const cors = require('cors');
const path = require('path');
const url = require('url');
const app = express();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3001;

app.use(cors());
app.use('/', express.static(__dirname));


app.listen(port, host , () => {
  console.log(`Web is running at http://${host}:${port}`);
});