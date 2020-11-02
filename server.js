const express = require('express');
const Mailer = require(__dirname + '/classes/Mailer.js');

var app = express();

app.use(express.static(__dirname + 'public'));
app.use('/assets/js', express.static(__dirname + '/assets/js'));
app.use('/assets/webfonts', express.static(__dirname + '/assets/webfonts'));
app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/sass', express.static(__dirname + '/assets/sass'));
app.use('/assets/sass/base', express.static(__dirname + '/assets/sass/base'));
app.use('/assets/sass/components', express.static(__dirname + '/assets/sass/components'));
app.use('/assets/sass/layout', express.static(__dirname + '/assets/sass/layout'));
app.use('/assets/sass/lib', express.static(__dirname + '/assets/sass/lib'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/pages', express.static(__dirname + '/pages'));
app.use('/classes', express.static(__dirname + '/classes'));
const pagine = __dirname + "/pages/";
const mainDir = __dirname + "/";


app.get('/contattami(.html)?', function (req, res) {

});

app.get('/elements(.html)?', function (req, res) {
  res.status(200).sendFile(pagine + "elements.html" );
});

app.get('/', function (req, res) {
  res.status(200).sendFile(pagine + "index.html" );
});

app.get('*', function(req, res){
  res.status(200).sendFile(pagine + "404.html" );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on port ${ PORT }`);
});
