/**
 * Created by pkonwar on 1/22/2017.
 */

var https = require('https');
var fs = require('fs');
//var privateKey  = fs.readFileSync('certs/mydomain.key', 'utf8');
//var certificate = fs.readFileSync('certs/certificate.pem', 'utf8');

//var credentials = {key: privateKey, cert: certificate};

var express = require('express');       //load express dependency
var app = express();        //new instance of express

var request = require('request');   //make http request

app.use(express.static("./angu-boot-master"));        //root of the application. serves static files

//app.use(express.static("./webapp"));

//var httpsServer = https.createServer(credentials, app);

app.post('/listening', function (req, res) {
    console.log("Recieved something")
    console.log(res);
    res.send({name : "partha"});
});

app.listen(process.env.PORT);           //listen on 3000 port
//httpsServer.listen(3000);

console.log('application started in port 3000');
module.exports = app;       // export this module to use this as a dependency in other module