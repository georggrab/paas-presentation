const express = require('express');
const serve   = require('express-static');
const serveIndex = require('serve-index')
const app = express();
 
app.use('/', express.static('presentation'), serveIndex('public', {'icons': true}))
app.use('/hello',function(req,res){
  res.end('Hello ' + (req.query['name'] || 'World'))
})
const port = process.env['PORT'] || 3000
const server = app.listen(port, function(){
  console.log('server is running at %s', server.address().port);
});