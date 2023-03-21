const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/app-base'));
app.get('/*', function(req,res) {
  res.sendFile('/dist/app-base/index.html', { root: __dirname });
});
app.listen(process.env.PORT || 8080);