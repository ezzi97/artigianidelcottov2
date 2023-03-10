const express = require('express');
var bodyParser = require('body-parser');
const Mailer = require(__dirname + '/classes/Mailer.js');
const mailSender = new Mailer();
var app = express();

app.use(express.static(__dirname + 'pages'));
app.use(express.static('public'));
app.use('/assets/js', express.static(__dirname + '/assets/js'));
app.use('/assets/fonts', express.static(__dirname + '/assets/fonts'));
app.use('/assets/css', express.static(__dirname + '/assets/css'));
app.use('/assets/sass', express.static(__dirname + '/assets/sass'));
app.use('/assets/sass/base', express.static(__dirname + '/assets/sass/base'));
app.use('/assets/sass/components', express.static(__dirname + '/assets/sass/components'));
app.use('/assets/sass/layout', express.static(__dirname + '/assets/sass/layout'));
app.use('/assets/sass/lib', express.static(__dirname + '/assets/sass/lib'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/pages', express.static(__dirname + '/pages'));
app.use('/classes', express.static(__dirname + '/classes'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const pagine = __dirname + "/pages/";
const mainDir = __dirname + "/";

app.get('/contattaci(.html)?', function (req, res) {
  res.status(200).sendFile(pagine + "contattaci.html" );
});

app.get('/servizi(.html)?', function (req, res) {
  res.status(200).sendFile(pagine + "servizi.html" );
});

app.get('/lavori(.html)?', function (req, res) {
  res.status(200).sendFile(pagine + "lavori.html" );
});

app.post('/manda_email', function(req, res) {
  mailSender.sendEmail(req.body, function(risposta) {
    res.status(risposta.statusCode).json({statusCode: risposta.statusCode});
  });
});

app.get('/', function (req, res) {
  res.status(200).sendFile(pagine + "index.html" );
});

app.get('/robots.txt', function (req, res) {
  res.status(200).sendFile(mainDir + "robots.txt" );
});

app.get('/sitemap.xml', function (req, res) {
  res.status(200).sendFile(mainDir + "sitemap.xml" );
});

app.get('*', function(req, res){
  res.status(404).sendFile(pagine + "404.html" );
});

const utente = process.env.email;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is running on port ${ PORT }`);
});
